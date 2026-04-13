const rootSelector = '[data-js-video-player]'
class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
    timelineContainer: '[data-js-video-timeline]',
    timelineProgress: '[data-js-video-progress]',
    playPauseBtn: '[data-js-video-play-pause]',

    volumeContainer: '[data-js-video-volume-container]',
    volumeButton: '[data-js-video-volume-button]',
    volumeSlider: '[data-js-video-volume]',
    volumeIconUse: '[data-js-video-volume-button] use',
    

    currentTimeEl: '[data-js-video-current-time]',
    durationEl: '[data-js-video-duration]',
    fullscreenBtn: '[data-js-video-fullscreen]',
    controls: '[data-js-video-controls]',
  }

  stateClasses = {
    isActive: 'is-active',
    controlsVisible: 'is-visible',
  }

  

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.timelineContainerElement = this.rootElement.querySelector(this.selectors.timelineContainer)
    this.timelineProgressElement = this.rootElement.querySelector(this.selectors.timelineProgress)
    this.playPauseBtnElement = this.rootElement.querySelector(this.selectors.playPauseBtn)

    this.volumeContainerElement = this.rootElement.querySelector(this.selectors.volumeContainer)
    this.volumeButtonElement = this.volumeContainerElement.querySelector(this.selectors.volumeButton)
    this.volumeSliderElement = this.volumeContainerElement.querySelector(this.selectors.volumeSlider)
    this.volumeIconUseElement = this.rootElement.querySelector(this.selectors.volumeIconUse);


    this.currentTimeElement = this.rootElement.querySelector(this.selectors.currentTimeEl)
    this.durationTimeElement = this.rootElement.querySelector(this.selectors.durationEl)
    this.fullscreenBtnElement = this.rootElement.querySelector(this.selectors.fullscreenBtn)
    this.controlsElement = this.rootElement.querySelector(this.selectors.controls)

    this.hideTimeout = null
    this.hasPlayed = false   
    this.lastVolume = 1
    this.isMuted = false
    this.wasMuted = false;
    this.isDragging = false;
    this.lastTapTime = 0;


   
    this.videoElement.controls = false
    this.bindEvents()
  }

  //Клик по экрану
  togglePlay = () => {
    if (this.videoElement.paused) {
      this.videoElement.play()
    } else {
      this.videoElement.pause()
    }
    this.rootElement.focus()
  }
  handleRootClick = (event) => {
    const target = event.target;
    const isControlElement = target.closest(this.selectors.controls);
    const isCenterPlayBtn = target.closest(this.selectors.playButton);
    const isplayPauseBtn = target.closest(this.selectors.playPauseBtn);
    const isVideo = target === this.videoElement;
    
    if (this.volumeContainerElement && !this.volumeContainerElement.contains(event.target)) {
      this.volumeContainerElement.classList.remove('is-expanded');
    }
    if (isControlElement) {   
      if ( isplayPauseBtn) {
        this.togglePlay();
      }     
      return; 
    }
    if (isVideo || isCenterPlayBtn) {
      this.togglePlay();
    }   
       
    
}


  //Движение мышью
  onMouseMove = () => {
    if (this.hasPlayed) {
      this.showControls()
      this.resetAutoHideTimer()
    }
  }
  onMouseLeave = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout)
    this.hideTimeout = setTimeout(this.hideControls, 1000)
  }

  //Прячем и показываем контролы
  showControls = () => {
    this.controlsElement.classList.add(this.stateClasses.controlsVisible)
  }
  resetAutoHideTimer = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout)
    this.isVisible = this.controlsElement.classList.contains(this.stateClasses.controlsVisible);
  }
  hideControls = () => {
    this.controlsElement.classList.remove(this.stateClasses.controlsVisible)
  }

  //Запуск и остановка видео
  onVideoPlay = () => {
    // Первое нажатие
    if(!this.hasPlayed){
      this.playButtonElement.classList.remove(this.stateClasses.isActive)
      this.hasPlayed = true 
    }

    this.playPauseBtnElement.classList.add(this.stateClasses.isActive)
    this.showControls()
    this.resetAutoHideTimer()   
  }
  onVideoPause = () => { 
    this.playPauseBtnElement.classList.remove(this.stateClasses.isActive) 
    this.showControls()
    this.resetAutoHideTimer() 
  }
  onVideoEnded = () => {
    this.showControls()
  }

  //Звук
  onVolumeButtonClick = (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()

    const isTouchDevice = window.matchMedia('(hover: none)').matches;

   
    if (isTouchDevice && this.volumeContainerElement) {
      const isExpanded = this.volumeContainerElement.classList.contains('is-expanded');
      
      if (!isExpanded) {
        this.volumeContainerElement.classList.add('is-expanded');
        return; 
      }
    }

    if (this.videoElement.volume > 0) {
      this.lastVolume = this.videoElement.volume
      this.videoElement.volume = 0
    } else {
      this.videoElement.volume = this.lastVolume || 1
    }
    this.resetAutoHideTimer()
  }
  onVolumeSliderClick = (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()

    const volume = parseFloat(event.target.value)
    if (!isNaN(volume)) {
      this.videoElement.volume = volume
      this.lastVolume = volume
    }
    this.resetAutoHideTimer()
  }
  updateVolumeSlider = () => {
    const volume = this.videoElement.volume;
    this.isMuted = volume === 0;
  
  
    if (this.volumeSliderElement) {
      this.volumeSliderElement.value = volume;
    }

    if (this.wasMuted === this.isMuted) return;

    this.wasMuted = this.isMuted;

    if (this.volumeButtonElement) {
        const label =  this.isMuted ? 'Unmute' : 'Mute';
        this.volumeButtonElement.setAttribute('aria-label', label);
        this.volumeButtonElement.setAttribute('title', label);
      }

    if (this.volumeIconUseElement) {
      const iconName = volume === 0 ? 'volume-cross' : 'volume';
      
      const currentHref = this.volumeIconUseElement.getAttribute('href') || this.volumeIconUseElement.getAttribute('xlink:href');
      
      
      const basePath = currentHref.split('#')[0];
      const newHref = `${basePath}#${iconName}`;

      this.volumeIconUseElement.setAttribute('href', newHref);
      this.volumeIconUseElement.setAttribute('xlink:href', newHref);
      
    }
  }

  //Время
  onTimeUpdate = () => {
    if (this.isDragging) return;

    const percent = this.videoElement.currentTime / this.videoElement.duration;
    this.updateVisualProgress(percent);
  }
  formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    return `${min}:${sec.toString().padStart(2, '0')}`
  }
  onLoadedMetadata = () => {
    this.durationTimeElement.textContent = this.formatTime(this.videoElement.duration)
    this.currentTimeElement.textContent = this.formatTime(0)
  }
  updateVisualProgress(percent) {
    const progress = percent * 100;
    this.timelineProgressElement.style.width = `${progress}%`;
    
    if (this.videoElement.duration) {
      const currentTime = percent * this.videoElement.duration;
      this.currentTimeElement.textContent = this.formatTime(currentTime);
    }
}


 //Полный экран
  onFullscreenBtnClick = (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } 
    else {
      this.rootElement.requestFullscreen().catch(console.error)
    }
    this.resetAutoHideTimer()
  }
  onFullscreenChange = () => {
   
    const isFullscreen = document.fullscreenElement === this.rootElement;

      if (isFullscreen) {
        screen.orientation.lock('landscape')
      } else {
        screen.orientation.unlock();
      }
    
  }

  
  //Клавиатура
  onKeyDown = (event) => {
    const { code } = event
    const isFullScreen = document.fullscreenElement === this.rootElement

    if (!isFullScreen && 
        document.activeElement !== this.rootElement && 
        document.activeElement !== this.videoElement) {
      return
    }

    const action = {
      ArrowRight: this.onArrowRightKeyDown,
      ArrowLeft: this.onArrowLeftKeyDown,
      Space: this.onSpaceKeyDown,
      KeyF: this.onKeyFKeyDown,
    }[code]

    if (action) {
      event.preventDefault()
      action()
      if (this.hasPlayed) this.resetAutoHideTimer()
    }
  }

  onArrowLeftKeyDown = () => {
    this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 5)
  }

  onArrowRightKeyDown = () => {
    this.videoElement.currentTime = Math.min(
      this.videoElement.duration || Infinity,
      this.videoElement.currentTime + 5
    )
  }

  onSpaceKeyDown = () => {
    if (this.videoElement.paused) this.videoElement.play()
    else this.videoElement.pause()
  }

  onKeyFKeyDown = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      this.rootElement.requestFullscreen().catch(console.error)
    }
  }

  //Перетаскивание мышью
  scrub = (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    const rect = this.timelineContainerElement.getBoundingClientRect();
    const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
    let percent = Math.min(Math.max(0, x / rect.width), 1);

   
    this.updateVisualProgress(percent);

    
    if (this.videoElement.duration) {
      this.videoElement.currentTime = percent * this.videoElement.duration;
    }
    };
  onTimelineMouseDown = (event) => {
    this.isDragging = true;
    this.scrub(event); // Сразу перемещаем к месту клика
  };
  onDocumentMouseMove = (event) => {
    if (this.isDragging) {
      this.scrub(event);
    }
  };
  onDocumentMouseUp = () => {
    if (this.isDragging) {
      this.isDragging = false;
    }
  };

  //Перетаскивание пальцем
  onTimelineTouchStart = (event) => {
  this.isDragging = true;
  this.scrub(event);
  // Предотвращаем прокрутку страницы, когда тянем таймлайн
  if (event.cancelable) event.preventDefault(); 
  };

  onDocumentTouchMove = (event) => {
    if (this.isDragging) {
      this.scrub(event);
    }
  };

  onDocumentTouchEnd = () => {
    this.isDragging = false;
  };


  //Двойное косание пальцем
  doubleTap = (event) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTapTime;

   
    if (tapLength < 300 && tapLength > 0) {
      const rect = this.videoElement.getBoundingClientRect();
  
     const clientX = event.touches 
        ? event.touches[0].clientX 
        : event.clientX;
      const clickX = clientX - rect.left;

      if (clickX < rect.width / 2) {
        
        this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 10);
      } else {
    
        this.videoElement.currentTime = Math.min(this.videoElement.duration, this.videoElement.currentTime + 10);
      }
      
      const percent = this.videoElement.currentTime / this.videoElement.duration;
      this.updateVisualProgress(percent);

      if (event.cancelable) {
        event.preventDefault(); 
      }
    }
    
    this.lastTapTime = currentTime;
  };

  bindEvents() {
    this.rootElement.addEventListener('click', this.handleRootClick)
    

    this.rootElement.addEventListener('mousemove', this.onMouseMove)
    this.rootElement.addEventListener('mouseleave', this.onMouseLeave)

    this.videoElement.addEventListener('play', this.onVideoPlay)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.videoElement.addEventListener('ended', this.onVideoEnded)
    this.videoElement.addEventListener('timeupdate', this.onTimeUpdate)
    this.videoElement.addEventListener('loadedmetadata', this.onLoadedMetadata)

    
    this.volumeButtonElement.addEventListener('click', this.onVolumeButtonClick)
    this.volumeSliderElement.addEventListener('click', this.onVolumeSliderClick)
    this.videoElement.addEventListener('volumechange', this.updateVolumeSlider);
    
    this.fullscreenBtnElement.addEventListener('click', this.onFullscreenBtnClick)

    document.addEventListener('fullscreenchange', this.onFullscreenChange);


    this.rootElement.addEventListener('keydown', this.onKeyDown)

    
    this.timelineContainerElement.addEventListener('mousedown', this.onTimelineMouseDown);
    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);

    this.timelineContainerElement.addEventListener('touchstart', this.onTimelineTouchStart, { passive: false });
    document.addEventListener('touchmove', this.onDocumentTouchMove, { passive: false });
    document.addEventListener('touchend', this.onDocumentTouchEnd);


  }
 
}

class VideoPlayerCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element)
    })
  }
}

export default VideoPlayerCollection

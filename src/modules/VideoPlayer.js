const rootSelector = '[data-js-video-player]'
class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
    timelineContainer: '[data-js-video-timeline]',
    timelineProgress: '[data-js-video-progress]',
    playPauseBtn: '[data-js-video-play-pause]',
    volumeSlider: '[data-js-video-volume]',
    currentTimeEl: '[data-js-video-current-time]',
    durationEl: '[data-js-video-duration]',
    fullscreenBtn: '[data-js-video-fullscreen]',
    controls: '[data-js-video-controls]',
  }

  stateClasses = {
    isActive: 'is-active',
    controlsVisible: 'is-visible',
  }

  AUTO_HIDE_DELAY = 5000

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.timelineContainerElement = this.rootElement.querySelector(this.selectors.timelineContainer)
    this.timelineProgressElement = this.rootElement.querySelector(this.selectors.timelineProgress)
    this.playPauseBtnElement = this.rootElement.querySelector(this.selectors.playPauseBtn)
    this.volumeSliderElement = this.rootElement.querySelector(this.selectors.volumeSlider)
    this.currentTimeElement = this.rootElement.querySelector(this.selectors.currentTimeEl)
    this.durationTimeElement = this.rootElement.querySelector(this.selectors.durationEl)
    this.fullscreenBtnElement = this.rootElement.querySelector(this.selectors.fullscreenBtn)
    this.controlsElement = this.rootElement.querySelector(this.selectors.controls)

    this.hideTimeout = null
    this.hasPlayed = false   // флаг первого запуска — до него контролы НЕ появляются

    this.videoElement.controls = false
    this.bindEvents()
  }

  onClick = () => {
    if (this.videoElement.paused) {

      this.videoElement.play()
    } else {

      this.videoElement.pause()
    }
    this.rootElement.focus()
  }

  // Движение мыши
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

  showControls = () => {
    this.controlsElement.classList.add(this.stateClasses.controlsVisible)
  }
  resetAutoHideTimer = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout)
    this.hideTimeout = setTimeout(this.hideControls, this.AUTO_HIDE_DELAY)
  }
  hideControls = () => {
    this.controlsElement.classList.remove(this.stateClasses.controlsVisible)
  }

  onVideoPlay = () => {
    // Первое нажатие
    if(!this.hasPlayed){
      this.playButtonElement.classList.remove(this.stateClasses.isActive)
      this.hasPlayed = true 
    }
    this.playPauseBtnElement.classList.toggle(this.stateClasses.isActive)
    this.showControls()
    this.resetAutoHideTimer()   
  }
  onVideoPause = () => { 
    this.playPauseBtnElement.classList.toggle(this.stateClasses.isActive) 
    this.showControls()
    this.resetAutoHideTimer() 
  }
  onVideoEnded = () => {
    this.showControls()
  }
  onTimeUpdate = () => {
    const { currentTime, duration } = this.videoElement
    if (duration) {
      const progress = (currentTime / duration) * 100
      this.timelineProgressElement.style.width = `${progress}%`
      this.currentTimeElement.textContent = this.formatTime(currentTime)
      this.durationTimeElement.textContent = this.formatTime(duration) 
    }
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


  onTimelineClick = (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()
    const rect = this.timelineContainerElement.getBoundingClientRect()
    const percent = (event.clientX - rect.left) / rect.width
    this.videoElement.currentTime = percent * this.videoElement.duration
    this.resetAutoHideTimer()
  }


  onVolumeChange = (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()
    this.videoElement.volume = parseFloat(event.target.value)
    this.resetAutoHideTimer()
  }

  onFullscreenBtnClick = (event) => {
    event.stopPropagation()
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      this.rootElement.requestFullscreen().catch(console.error)
    }
    this.resetAutoHideTimer()
  }

  
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

  bindEvents() {
    this.rootElement.addEventListener('click', this.onClick)
    this.rootElement.addEventListener('mousemove', this.onMouseMove)
    this.rootElement.addEventListener('mouseleave', this.onMouseLeave)

    this.videoElement.addEventListener('play', this.onVideoPlay)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.videoElement.addEventListener('ended', this.onVideoEnded)
    this.videoElement.addEventListener('timeupdate', this.onTimeUpdate)
    this.videoElement.addEventListener('loadedmetadata', this.onLoadedMetadata)

    this.timelineContainerElement.addEventListener('click', this.onTimelineClick)
    this.volumeSliderElement.addEventListener('click', this.onVolumeChange) 
    
    this.fullscreenBtnElement.addEventListener('click', this.onFullscreenBtnClick)

    document.addEventListener('keydown', this.onKeyDown)
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

const rootSelector = '[data-js-video-player]';

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
    // Новые селекторы
    timeline: '[data-js-video-timeline]',
    progress: '[data-js-video-progress]',
    volume: '[data-js-video-volume]',
    current: '[data-js-video-current]',
    duration: '[data-js-video-duration]',
  }

  stateClasses = {
    isActive: 'is-active',
    isMuted: 'is-muted',
  }

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.videoElement = this.rootElement.querySelector(this.selectors.video);
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton);
    
    // Новые элементы
    this.timeline = this.rootElement.querySelector(this.selectors.timeline);
    this.progress = this.rootElement.querySelector(this.selectors.progress);
    this.volume = this.rootElement.querySelector(this.selectors.volume);
    this.currentText = this.rootElement.querySelector(this.selectors.current);
    this.durationText = this.rootElement.querySelector(this.selectors.duration);

    this.bindEvents();
  }

  // Вспомогательный метод для форматирования времени (00:00)
  formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  togglePlay = () => {
    if (this.videoElement.paused) {
      this.videoElement.play();
    } else {
      this.videoElement.pause();
    }
  }

  // Обновление прогресс-бара и таймера
  onTimeUpdate = () => {
    const percent = (this.videoElement.currentTime / this.videoElement.duration) * 100;
    if (this.progress) this.progress.style.width = `${percent}%`;
    if (this.currentText) this.currentText.textContent = this.formatTime(this.videoElement.currentTime);
  }

  // Установка общей длительности при загрузке
  onLoadedMetadata = () => {
    if (this.durationText) this.durationText.textContent = this.formatTime(this.videoElement.duration);
  }

  // Перемотка кликом по таймлайну
  onTimelineClick = (event) => {
    const rect = this.timeline.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percent = x / width;
    this.videoElement.currentTime = percent * this.videoElement.duration;
  }

  onVolumeChange = (event) => {
    this.videoElement.volume = event.target.value;
  }

  onVideoPlay = () => {
    this.playButtonElement.classList.remove(this.stateClasses.isActive);
  }

  onVideoPause = () => {
    this.playButtonElement.classList.add(this.stateClasses.isActive);
  }

  // Обработка клавиш (как в YouTube)
  onKeyDown = (event) => {
    const { code } = event;
    const isFocused = document.activeElement === this.rootElement || document.activeElement === this.videoElement;
    
    if (!isFocused && !document.fullscreenElement) return;

    const actions = {
      Space: () => { event.preventDefault(); this.togglePlay(); },
      KeyK: () => this.togglePlay(), // Клавиша K как в YT
      KeyF: () => this.onKeyFKeyDown(),
      KeyM: () => { this.videoElement.muted = !this.videoElement.muted; },
      ArrowRight: () => { this.videoElement.currentTime += 5; },
      ArrowLeft: () => { this.videoElement.currentTime -= 5; },
      Digit1: () => { this.videoElement.currentTime = this.videoElement.duration * 0.1; }, // Прыжок на 10%
    };

    if (actions[code]) actions[code]();
  }

  onKeyFKeyDown = () => {
    if (!document.fullscreenElement) {
      this.rootElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  bindEvents() {
    this.playButtonElement.addEventListener('click', this.togglePlay);
    this.videoElement.addEventListener('click', this.togglePlay);
    this.videoElement.addEventListener('pause', this.onVideoPause);
    this.videoElement.addEventListener('play', this.onVideoPlay);
    this.videoElement.addEventListener('timeupdate', this.onTimeUpdate);
    this.videoElement.addEventListener('loadedmetadata', this.onLoadedMetadata);
    
    if (this.timeline) this.timeline.addEventListener('click', this.onTimelineClick);
    if (this.volume) this.volume.addEventListener('input', this.onVolumeChange);
    
    document.addEventListener('keydown', this.onKeyDown);
  }
}

class VideoPlayerCollection {
  constructor() {
    this.init();
  }
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element);
    });
  }
}

export default VideoPlayerCollection;
const rootSelector = '[data-js-video-player]'

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.bindEvents()
  }

  onClick = () => {
  this.videoElement.requestFullscreen()
  this.videoElement.controls = true
    if (this.videoElement.paused) {
      this.videoElement.play();
    } else {
      this.videoElement.pause();
    }
    this.playButtonElement.classList.toggle(this.stateClasses.isActive)
    this.rootElement.focus()
  }

  onVideoPlay= () => {
    this.playButtonElement.classList.remove(this.stateClasses.isActive)
  }
  onVideoPause = () => {
    this.playButtonElement.classList.add(this.stateClasses.isActive)
  }

  onVideoFullScreenChange = () => {

    const isFullScreenEnabled = document.fullscreenElement === this.videoElement



    if (!isFullScreenEnabled) {

      this.videoElement.pause()

    }

  }

  onKeyDown = (event) => {
        const { code } = event

        const isFullScreen = document.fullscreenElement === this.videoElement

        
        if (!isFullScreen && document.activeElement !== this.rootElement && document.activeElement !== this.videoElement) {
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
        }
  }
  onArrowLeftKeyDown = () => {
    this.videoElement.currentTime -= 5
  }
  onArrowRightKeyDown = () => {
    this.videoElement.currentTime += 5
  }
  onSpaceKeyDown = () => {
    if (this.videoElement.paused) { 
      this.videoElement.play();
    } else {
      this.videoElement.pause();
    }
  }
  onKeyFKeyDown  = () => {
    if (document.fullscreenElement) {
      this.videoElement.controls = false
      document.exitFullscreen();
    } 
    else {
      this.videoElement.requestFullscreen()
    }
  }
  


  bindEvents() {
    this.rootElement.addEventListener('click', this.onClick)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.videoElement.addEventListener('play', this.onVideoPlay)
    this.videoElement.addEventListener('fullscreenchange', this.onVideoFullScreenChange)
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

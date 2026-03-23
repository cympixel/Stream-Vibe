import './VideoPlayer.scss';
import Icon from '../Icon';

export default (props) => {
  const {videoSrc, poster} = props

  return (
    <div className="video-player" tabindex="0" data-js-video-player='' >
              <video 
              src={videoSrc} 
              className="video-player__video"
              poster={poster}
              data-js-video-player-video=''
              
              />
              <button data-js-video-player-play-button='' type='button' className="video-player__play-button is-active" aria-label='Play video' title='Play video'>
                  <Icon className="video-player__play-button-icon" name='play-circle'/>
              </button>
              
              <div class="video-player__controls">
                <div class="video-player__timeline-container" data-js-video-timeline>
                  <div class="video-player__timeline">
                    <div class="video-player__timeline-progress" data-js-video-progress></div>
                  </div>
                </div>

                <div class="video-player__buttons">
                  <button data-js-video-play-pause>Play</button>
                  <div class="video-player__volume-container">
                    <input type="range" min="0" max="1" step="0.1" value="1" data-js-video-volume/>
                  </div>
                  <div class="video-player__time">
                    <span data-js-video-current-time>0:00</span> / <span data-js-video-duration>0:00</span>
                  </div>
                  <button data-js-video-fullscreen>Full</button>
                </div>
              </div>
    </div>
  )
}


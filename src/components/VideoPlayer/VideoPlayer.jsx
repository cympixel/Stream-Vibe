import './VideoPlayer.scss';
import Icon from '../Icon';

export default (props) => {
  const {videoSrc, poster, isMuted = false} = props

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
              
              <div className="video-player__controls" data-js-video-controls=''>
                <div className="video-player__timeline-container" data-js-video-timeline=''>
                    <div className="video-player__timeline-progress" data-js-video-progress=''></div>                 
                </div>

                <div class="video-player__buttons">
                  <div className="video-player__buttons-left-side">
                    <button className="video-player__play-pause-button" data-js-video-play-pause=''>
                      <Icon className="video-player__play-pause-icon video-player__play-pause-button-icon--pause" name='pause'  hasFill/>
                      <Icon className="video-player__play-pause-icon video-player__play-pause-button-icon--play" name='play' hasFill/>
                    </button>                 
                    <div className="video-player__volume-container" data-js-video-volume-container>
                      <button 
                        className="video-player__volume-button" 
                        data-js-video-volume-button
                        type="button"
                        aria-label={isMuted ? "Unmute" : "Mute"} 
                        title={isMuted ? "Unmute" : "Mute"}
                      >                        
                        <Icon 
                          name={isMuted ? "volume-cross" : "volume"} 
                          className="video-player__volume-button-icon"
                        />
                      </button>

                      <input 
                        className="video-player__volume-slider" 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value="0.5" 
                        data-js-video-volume
                      />
                    </div>
                    <div className="video-player__time">
                      <span data-js-video-current-time=''>0:00</span>/
                      <span data-js-video-duration=''>0:00</span>
                    </div>
                  </div>
                  <div className="video-player__buttons-right-side">
                    <button class="video-player__fullsreen-button" data-js-video-fullscreen=''>
                      <Icon className="video-player__fullsreen-button-icon" name='open' hasFill/>
                    </button>
                  </div>
                </div>
              </div>
    </div>
  )
}

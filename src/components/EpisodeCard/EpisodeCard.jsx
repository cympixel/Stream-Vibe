import './EpisodeCard.scss';
import Icon from '../Icon';
import VideoPlayer from '../VideoPlayer';



export default (props) => {
  const{number, title , description, duration, video} = props

 
  return (
    <div className="episode-card">
        <div className="episode-card__number">
          {number}
        </div>
        <VideoPlayer videoSrc={video.src} poster={video.poster}/>
        <div className="episode-card__body">
          <div className="episode-card__info">
            <h4 className="episode-card__title h6">{title}</h4>
            <div className="episode-card__duration">
              <Icon name='clock_stroke' ariaLabel='Duration'/>
              <span>
                {duration}
              </span>
            </div>
          </div>
          <div className="episode-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
    </div>
  )
}


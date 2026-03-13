import Badge from '../Badge';
import './MovieCard.scss';
import { Image } from 'minista';
import RatingView from '../RatingView';
export default (props) => {
  const {
    title, imgSrc, duration, views, href ='/movie', released, rating, season
  } = props
  return (
    <a 
    title={title} 
    href={href} 
    className="movie-card">
      <h3 className="visually-hidden">
        {title}
      </h3>
      <Image 
      className='movie-card__image' 
      src={imgSrc}
      
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
          iconName='clock' 
          iconAriaLabel='Duration'
          hasFillIcon
          >
            {duration}
          </Badge>
        )}
        {season && (
          <Badge
          iconName='catalog' 
          hasFillIcon
          >
            {season}
          </Badge>
        )}
        {rating && (
          <Badge
          className='movie-card__rating-badge'
          >
            <RatingView {...rating}/>
          </Badge>
        )}
        {views && (
          <Badge
          iconName='eye' 
          iconAriaLabel='Views'
          hasFillIcon
          >
            {views}
          </Badge>
        )}
        {released && (
          <Badge
          className='movie-card__released-badge'
          isBig
          >
            Released at <time datetime={released.time}>{released.label}</time>
          </Badge>
        )}
        
      </div>
    </a>
  )
}


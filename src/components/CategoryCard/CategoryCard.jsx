import { Image } from 'minista';
import './CategoryCard.scss';
import Icon from '../Icon';
import Badge from '../Badge';
import basePath from '@/constants/Path';


export default (props) => {
  
  const{title, images = [], badge} = props

  const href = `${basePath}/movies`

  return (
    <a href={href} className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc, index)=>(
          <Image 
          className='category-card__image'
          src={imgSrc}
          key={index}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge mode='accent' isBig>
              {badge}
            </Badge>
          )}
          <span>
          {title}
          </span>
        </h3>
        <Icon className='category-card__icon' name='arrow-right'/>
      </div>
    </a>
  )
}


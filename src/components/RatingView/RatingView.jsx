import './RatingView.scss';
import starsUnfilledImgSrc from '@/assets/images/rating/stars__unfilled.svg'
import starsFilledImgSrc from '@/assets/images/rating/stars__filled.svg'

export default (props) => {
   const {value, label} = props


   const ariaLabel = `Rating ${value} stars`
  return (
    <div 
    className="rating-view"
    aria-label={ariaLabel}
    title={ariaLabel}
    style={{
    '--ratingViewValue':value
    }}>
      <div className="rating-view__stars">
        <img src={starsUnfilledImgSrc} alt="" className="rating-view__stars-unfilled" width={98} height={18}/>
        <img src={starsFilledImgSrc} alt="" className="rating-view__stars-filled" width={98} height={18}/>
      </div>
      {label && (
          <div className="rating-view__label">
            {label}
          </div>
        )}
    </div>
  )
}


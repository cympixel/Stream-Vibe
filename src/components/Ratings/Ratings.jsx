import './Ratings.scss';
import RatingView from '../RatingView';

export default (props) => {


  const {items = []} = props 


  return (
    <div className="R=ratings">
      <ul className="ratings__list">
        {items.map(({title, ratingValue}, index)=>{
          <li className="ratings__item" key={index}>
            <h4 className="reting__title">
              {title}
            </h4>
            <RatingView value={ratingValue} label={ratingValue}/>
          </li>
        })}
      </ul>
    </div>
  )
}


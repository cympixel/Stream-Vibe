import './MovieBannerCard.scss';
import { Image } from 'minista';
import Button from '../Button';
import classNames from 'classnames';



export default (props) => {
  const {
    title, titleId, TitleTag ='h2', desc, imgSrc, isSmallPaddingY = false
  } = props
   

  return (
    <div className="movie-banner-card">
      <Image className='movie-banner-card__image' src={imgSrc}/>
      <div className={classNames("movie-banner-card__inner", {"movie-banner-card__inner--small-padding-y":isSmallPaddingY})}>
        <div className="movie-banner-card__body">
          <TitleTag id={titleId} className="movie-banner-card__title h3">
            {title}
          </TitleTag>
          <div className="movie-banner-card__desc hidden-mobile">
              <p>{desc}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button className='movie-banner-card__play-btn'label='Play Now' iconName='play' hasFillIcon/>
          <div className="movie-banner-card__actions">
              <Button 
            iconName='plus'
            mode='black-06'
            label='Add'
            isLabelHidden
            />
              <Button 
            iconName='like'
            mode='black-06'
            label='Like'
            isLabelHidden/>
              <Button 
            iconName='volume'
            mode='black-06'
            label='Volume'
            isLabelHidden/>
          </div>
        </footer>
      </div>
    </div>
  )
}


import 'swiper/css';
import './Slider.scss';
import SliderNavigation from './components/SliderNavigation';
import classNames from 'classnames';

const defaultSliderParams = {
  // От 0 и до следующего брекпоинта
  slidesPerView: 1.9,
  slidesPerGroup: 1,
  spaceBetween: 16,
  loop:false,
 
  // Следующий брекпоинт
  breakpoints: {
    481: {
      slidesPerView: 2.5,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
     
    },
    1224: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 16,
     
    },
    1441: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 30,
      
    },
  }
}



export default (props) => {
  
  const{
    children, 
    navigationTargetElementId = null,
    sliderParams=defaultSliderParams,
    isBeyondTheViewportOnMobileS,
    hasScrollbarOnMobile = true,
    navigationPosition='',
    isNavigationHiddenMobile = 'false',
    navigationMode,
    navigationJustifyContent
  }
  = props

  
  return (
    <div className={classNames('slider', {'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS})}
      data-js-slider = {
        JSON.stringify({
      sliderParams,
      navigationTargetElementId
    }) 
    }>      
      <div className="slider__swiper swiper" data-js-slider-swiper=''>

        <ul className="swiper__list swiper-wrapper">
          
           {children.map((slide, index)=>(
              <li className="slider__item swiper-slide" key={index}>
                {slide}
              </li>
           ))}
         
        </ul>
        
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className='slider__navigation'
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
          mode={navigationMode}
          justifyContent={navigationJustifyContent}
        />
      )}

      {hasScrollbarOnMobile && (
        <div className="slider__scrollbar visible-mobile" data-js-slider-scrollbar=''></div>
      )}

    </div>
  )
}


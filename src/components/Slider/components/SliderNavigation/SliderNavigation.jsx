import classNames from 'classnames';
import './SliderNavigation.scss';
import Button from '@/components/Button';

export default (props) => {

  const {
    className, 
    id, 
    hasPagination=true, 
    mode='', 
    buttonMode = 'black-10',
    position='', 
    isHiddenMobile = true, 
    isHiddenTablet = false,
    justifyContent
  } = props


  return (
    <div 
    className={classNames(className, 'slider-navigation', 
      {[`slider-navigation--${mode}`]:mode, 
      [`slider-navigation--${position}`]: position,
      [`hidden-mobile`]: isHiddenMobile,
      [`hidden-tablet`]: isHiddenTablet,
      [`slider-navigation--${justifyContent}`]: justifyContent
    })} 
    id={id}
    data-js-slider-navigation=''
    >
      <Button 
      className='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
      mode={buttonMode}
      iconName='arrow-left'
      label='previous sLide'
      isLabelHidden
      extraAttrs={{
        'data-js-slider-previous-button':''
      }}
      />
      {hasPagination &&(
        <div className="slider-navigation__pagination"
        data-js-slider-pagination=''/>
      )}
      <Button 
      className='slider-navigation__arrow-button slider-navigation__arrow-button--next'
      mode={buttonMode}
      iconName='arrow-right'
      label='next sLide'
      isLabelHidden
      extraAttrs={{
        'data-js-slider-next-button':''
      }}
      />
      
    </div>
  )
}


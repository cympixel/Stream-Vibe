import Icon from '../Icon';
import './Button.scss';
import classNames from 'classnames';

export default (props) => {
  const{
    className,
    type = 'button',
    href,
    target,
    label,
    isLabelHidden = false,
    iconName,
    iconName2,
    iconPosition = "before",
    mode='',
    hasFillIcon,
    extraAttrs
  }=props


  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const btnProps = {type}
  const specificProps = isLink ? linkProps : btnProps
  const title = isLabelHidden ?  label : undefined
  const iconComponent = iconName && (
  <Icon
  className="button__icon"
  name={iconName}
  hasFill={hasFillIcon}
 
  /> 
  )
  const iconComponent2 = iconName2 && (
  <Icon
  className="button__icon--2 visually-hidden"
  name={iconName2}
  hasFill={hasFillIcon}
 
  /> 
  )


  return (
    <Component
      className={classNames(className, 'button',{[`button--${mode}`]: mode } )}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === 'before' && iconComponent}
      {iconPosition === 'before' && iconComponent2}
      {!isLabelHidden && (
        <span className='button__label'>{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}


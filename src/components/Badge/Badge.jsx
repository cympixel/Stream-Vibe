import classNames from 'classnames';
import './Badge.scss';
import Icon from '../Icon';

export default (props) => {
  const {
    className,
    mode = '', 
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel
  } = props


  return (
   <div className={classNames(className, "badge", {
    [`badge--${mode}`]: mode,
    'badge--big':isBig
   })}>
    {iconName && (
      <Icon
      className='badge__icon' 
      name={iconName}
      hasFill={hasFillIcon}
      aria-label={iconAriaLabel}
      />
      )}
    <span>
      {children}
    </span>
   </div>
  )
}


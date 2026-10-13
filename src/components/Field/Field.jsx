import getIdFromTitle from '@/utils/getIdFromTitle';
import './Field.scss';
import classNames from 'classnames';

export default (props) => {
  const {
    className, 
    id = getIdFromTitle(props.label), 
    label, 
    type, 
    placeholder, 
    isRequired, 
    mask,
    renderBefore
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}
  
  if(mask){
    extraAttrs['data-js-input-mask'] = mask
  }
  
  return (
    <div className={classNames(className, 'field')}>
      <label htmlFor={id} className="field__label">
        {label} {isRequired &&  (
          <span className='field__required-star' aria-hidden={true}>*</span>
        )}
      </label>
      <div className="field__body">
        {renderBefore?.('field__control')}
        <Component
        className='field__control'
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        {...extraAttrs}
        />
      </div>
    </div>
  )
}


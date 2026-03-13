import getIdFromTitle from '@/utils/getIdFromTitle';
import './Checkbox.scss';
import classNames from 'classnames';

export default (props) => {
  const {
    className, 
    id = getIdFromTitle(props.label), 
    label, 
    isRequired
  } = props

  return (
    <label 
    className={classNames(className,'checkbox')}
    htmlFor={id}
    >
      <input className='checkbox__input' type="checkbox" name="" id={id} required={isRequired}/>
      <span className="checkbox__label">
        {label}
      </span>
    </label>
  )
}


import getIdFromTitle from '@/utils/getIdFromTitle';
import './Select.scss';
import classNames from 'classnames';

export default (props) => {

  const{
    id = getIdFromTitle(props.label),
    label, 
    isLabelHidden = true,
    options = [],
    buttonClassName
  }
  =props

  const IDs = {
    originalControl:id,
    label:`${id}-label`,
    dropdown:`${id}-dropdown`
  }

  const selectedOptionIndex = options.findIndex(({ isSelected }) => isSelected) ?? options[0]
  const selectedOption = options[selectedOptionIndex]

  const getOptionId = (index) => {
    return `${id}-option-${index}`
  }

  return (
    <div className="select" data-js-select=''>
      
      <label 
      htmlFor={IDs.originalControl} 
      className={classNames('select__label',{'visually-hidden': isLabelHidden})}
      id={IDs.label}>
        {label}
      </label>
      
      <select 
      className={classNames('select__original-control', buttonClassName)} 
      id={IDs.originalControl} 
      tabIndex={-1}
      data-js-select-original-control=''
      defaultValue={selectedOption.value}
      aria-hidden={true}
      >
        {options.map(({value}, index)=>(
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
      
      <div className="select__body">
        <div className={classNames('select__button', buttonClassName)}
        role='combobox'
        aria-expanded={false}
        aria-haspopup='listbox'
        aria-controls={IDs.dropdown}
        aria-labelledby={IDs.label}
        aria-activedescendant={getOptionId(selectedOptionIndex)}
        tabIndex={0}
        data-js-select-button=''>
          {selectedOption.value}
        </div>
        <div className="select__dropdown"
        id={IDs.dropdown}
        role='listbox'
        aria-labelledby={IDs.label}
        data-js-select-dropdown=''
        >
          {options.map((option, index)=>{
            const {value, isSelected = false} = option

            return (
              <div className={classNames('select__option', {'is-selected': isSelected, 'is-current': isSelected})} 
                id={getOptionId(index)}
                role='option'
                aria-selected={isSelected}
                data-js-select-option=''
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


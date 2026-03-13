import classNames from 'classnames';
import './AccordionGroup.scss';

export default (props) => {
  
  const{className, mode='', columns=1, children, isOrderedList = true} = props 

 
  const ListTag = isOrderedList ? 'ol' : 'ul'
  
  const itemsPerColumn = Math.ceil(children.length / columns)


  return (
   <ListTag
    className={classNames(className,'accordion-group', {
      [`accordion-group--${columns}-columns`] : columns>1,
      'accordion-group--has-counter':isOrderedList,
      [`accordion-group--${mode}`] : mode,
    })}
   >
    {children.map((child,index)=>(
      <li className={classNames("accordion-group__item", {'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0})}  key={index}>
        {child}
      </li>
    ))}
   </ListTag>
  )
}


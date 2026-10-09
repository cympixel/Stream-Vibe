import classNames from 'classnames';
import './Grid.scss';

export default (props) => {
  const {
    columns = 1, 
    children
    } 
    = props
  return (
    <ul className={classNames('grid', {[`grid--${columns}`] : columns>1})}>
      
      {children.map((child, index)=>(
        <li 
        className="grid__item"
        key={index}
        >
          {child}
        </li>
      ))}
    
    </ul>
  )
}


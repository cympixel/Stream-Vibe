import classNames from 'classnames';
import './Socials.scss';
import Button from '../Button';
export default (props) => {
  const{
    className, 
    links = []
  } = props

  return (
    <div className={classNames(className, 'soc1als')}>
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index)=>(
          <li className="soc1als__item" key={index}>
            <Button 
            mode='black-10' 
            href='/' 
            className='soc1als__link' 
            target='_blank'
            label={label}
            isLabelHidden
            iconName={iconName}
            hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}


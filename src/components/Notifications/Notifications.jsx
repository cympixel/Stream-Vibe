import './Notifications.scss';
import Button from '../Button';
import classNames from 'classnames';
import Icon from '../Icon';

export default (props) => {
  const {className} = props

  const notificationsItems = [
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. sit amet. psum dolor sit amet. sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. sit amet. psum dolor sit amet. sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. sit amet. psum dolor sit amet. sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. sit amet. psum dolor sit amet. sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },
    {
      label:"Lorem ipsum dolor sit amet.",
    },  
  ]
  
  return (
    <div class={classNames('notifications', className)} data-js-notifications="">

   <Button className='notifications__button'
      label='Notifications' 
      isLabelHidden
      iconName='notification'
      mode='transparent'
      hasFill
      extraAttrs={{'data-js-notifications-button':""}}
      />
    
      <div class="notifications__overlay" data-js-notifications-overlay="">
        <div className="notifications__wrapper">
          <div className="notifications__panel">
            <ul className="notifications__list">
              {
                notificationsItems && notificationsItems.map((notificationsItem, index)=>(
                  <li className="notifications__list-item" key={index}>               
                    <a href="" className="notifications__link">
                      <Icon className='notifications__link-icon' name='notification'/>
                      <span className="notifications__link-text">
                        {notificationsItem.label}
                      </span>
                    </a>
                </li>
                ))
              }
              
            </ul>
          </div>
        </div>
      </div>
    
</div>
  )
}


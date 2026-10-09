import Logo from '@/components/Logo'
import './Header.scss'
import classNames from 'classnames'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Search from '@/components/Search'
import Notifications from '@/components/Notifications'
import basePath from '@/constants/Path'

export default  (props) => {
    
    
    const{url, isFixed}=props

    const menuItems = [
        {
            label:'Home',
            href:`${basePath}/`
        },
         {
            label:'Movies & Shows',
            href:`${basePath}/movies`
        },
         {
            label:'Support',
            href:`${basePath}/support`
        },
         {
            label:'Subscriptions',
            href:`${basePath}/subscriptions`
        },
        
    ]

    return (
        <header className={classNames('header', {'is-fixed':isFixed})} data-js-overlay-menu="">
            <div className="header__inner container">
                <Logo className='header__logo'/>
                <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog="">
                    <nav className="header__menu" data-js-navigation=''>
                        <ul className="header__menu-list">
                            {
                                menuItems.map(({label, href}, index)=>(
                                    <li className="header__menu-item"  key={index}> 
                                        <a href={href} className={classNames('header__menu-link', {'is-active': href===url})}>{label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Search className='header__search'/>                       
                        <Notifications className='header__notifications'/>
                    </div>
                </dialog>
                <BurgerButton className='header__burger-button visible-tablet' extraAttrs={{'data-js-overlay-menu-burger-button':''}}/>
            </div>
        </header>
    )
}


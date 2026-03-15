import './Logo.scss';
import classNames from 'classnames';
import logoImgSrc from '@/assets/images/logo.svg'
import basePath from '@/constants/Path';

export default (props) => {
  const{className}=props
  return (
    <a href={`${basePath}`} className={classNames(className, 'logo')} title={"Home"} aria-label={"Home"}>
      <img src={logoImgSrc} alt="" className="logo__image" width={199} height={60}/>
    </a>
  )
}


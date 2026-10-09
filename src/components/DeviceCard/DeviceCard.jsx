import './DeviceCard.scss';

export default (props) => {
  const{title, description, imgSrc}=props
  
  return (
    <div className="device-card">
      <div className="device-card__header">
        <div className="device-card__image-wrapper">
          <img src={imgSrc} alt="" loading='lazy' />
        </div>
        <h3 className="device-card__title h4">
          {title}
        </h3>
      </div>
      <div className="device-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}


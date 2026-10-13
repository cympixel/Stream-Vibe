import classNames from 'classnames';
import './Section.scss';

export default (props) => {

  const{
    className, 
    title,
    titleId, 
    actions, 
    actionHidden=false,
    description, 
    children,
    id} = props

  return (
    <section 
    className={classNames(className, 'section container')}
    aria-labelledby={titleId}
    id={id}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">
             <p>{description}</p> 
          </div>)}
          
        </div>
        {actions && (
          <div className={classNames('section__actions', 
            {'hidden-mobile': actionHidden})}>
              {actions}
          </div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}


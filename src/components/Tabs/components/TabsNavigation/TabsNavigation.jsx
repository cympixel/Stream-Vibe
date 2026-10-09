import './TabsNavigation.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'

export default (props) => {
  const {
    className,
    id,
    tabsTitle,
    items = [],
  } = props

  const titleFormatted = getIdFromTitle(tabsTitle)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={classNames(className, 'tabs-navigation')}
      role="tablist"
      aria-labelledby={titleId}
      id={id}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {tabsTitle}
      </h3>
      {items.map((item, index) => {
        
        const { buttonId, contentId } = getTabsElementsIdsFromTitle(item.title)

        return (
          <div
            className={classNames('tabs-navigation__button', {
              'is-active': item.isActive
            })}
            aria-controls={contentId}
            id={buttonId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}



import './Tabs.scss'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from './utils/getTabsElementsIdsFromTitle'
import TabsNavigation from './components/TabsNavigation'

const Tabs = (props) => {
  const {
    className,
    title,
    navigationTargetElementId = null,
    items = [],
    isEnableOnlyOnMobile = false
  } 
  = props

  return (
    <div
      className={classNames(className, 'tabs', {'tabs--enable-only-on-mobile': isEnableOnlyOnMobile})}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && <TabsNavigation tabsTitle={title} items={items} />}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            isActive,
            children
          } = item

          const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

          return (
            <div
              className={classNames('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs

import getParams from '@/utils/getParams'
import pxToRem from '@/utils/pxToRem'

const rootSelector = '[data-js-tabs]'

class Tabs {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-tabs-navigation]',
    button: '[data-js-tabs-button]',
    content: '[data-js-tabs-content]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  stateCSSVariables = {
    activeButtonWidth: '--tabsActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsActiveButtonOffsetLeft',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonElements = [...this.navigationElement.querySelectorAll(this.selectors.button)]
    this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)]
    this.state = {
      activeTabIndex: this.buttonElements.findIndex(({ ariaSelected }) => ariaSelected)
    }
    this.limitTabsIndex = this.buttonElements.length - 1
    this.bindEvents()
    setTimeout(this.bindObservers, 500)
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1

      if (isActive) {
        this.updateNavigationCSSVars(buttonElement)
      }
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIndex

      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  updateNavigationCSSVars(
    activeButtonElement = this.buttonElements[this.state.activeTabIndex]
  ) {
    const { width, left } = activeButtonElement.getBoundingClientRect()
    const offsetLeft = left - this.navigationElement.getBoundingClientRect().left

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonWidth,
      `${pxToRem(width)}rem`
    )

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonOffsetLeft,
      `${pxToRem(offsetLeft)}rem`
    )
  }

  activateTab(newTabIndex) {
    this.state.activeTabIndex = newTabIndex
    this.updateUI()
    this.buttonElements[newTabIndex].focus()
  }

  previousTab = () => {
    const newTabIndex = this.state.activeTabIndex === 0
      ? this.limitTabsIndex
      : this.state.activeTabIndex - 1

    this.activateTab(newTabIndex)
  }

  nextTab = () => {
    const newTabIndex = this.state.activeTabIndex === this.limitTabsIndex
      ? 0
      : this.state.activeTabIndex + 1

    this.activateTab(newTabIndex)
  }

  firstTab = () => {
    this.activateTab(0)
  }

  lastTab = () => {
    this.activateTab(this.limitTabsIndex)
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
    this.updateUI()
  }

  onKeyDown = (event) => {
    const { target, code, metaKey } = event
    const isTabsContentFocused = this.contentElements
      .some((contentElement) => contentElement === target)
    const isTabsButtonFocused = this.buttonElements
      .some((buttonElement) => buttonElement === target)

    if (!isTabsContentFocused && !isTabsButtonFocused) {
      return
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    const isMacHomeKey = metaKey && code === 'ArrowLeft'
    if (isMacHomeKey) {
      event.preventDefault()
      this.firstTab()
      return
    }

    const isMacEndKey = metaKey && code === 'ArrowRight'
    if (isMacEndKey) {
      event.preventDefault()
      this.lastTab()
      return
    }

    if (action) {
      event.preventDefault()
      action()
    }
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => this.onButtonClick(index))
    })
    document.addEventListener('keydown', this.onKeyDown)
  }

  onResize = () => {
    this.updateNavigationCSSVars()
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize)

    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection


const rootSelector = '[data-js-notifications]'

class Notifications {
  stateClasses = {
        isActive: 'active',     
        isLock:   'is-lock'    
    }

    selectors = {
        notificationsButton: '[data-js-notifications-button]',
        overlay: '[data-js-notifications-overlay]',
    }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.notificationsButtonElement  = this.rootElement.querySelector(this.selectors.notificationsButton);
    this.overlayElement       = this.rootElement.querySelector(this.selectors.overlay);
    this.bindEvents()
  }

    onClick = (event) =>{
    const {target} = event
    const isButtonClick = this.notificationsButtonElement.contains(target);
    const isOutsideOverlayClick = !target.closest(this.selectors.overlay);

    if(!isButtonClick && isOutsideOverlayClick && this.overlayElement.classList.contains(this.stateClasses.isActive)){
        this.toggleNotifications()
        return
        }
    }

    toggleNotifications= () =>{
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    }
    

    onEscapeKeyDown = (e) => {
        if (e.key === 'Escape' && this.overlayElement.classList.contains(this.stateClasses.isActive)) {
        this.toggleSearch();
        }
    }
    onCtrlKKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        this.toggleSearch();
    }
    }

    bindEvents() {
    this.notificationsButtonElement.addEventListener('click', this.toggleNotifications);
    document.addEventListener('click', this.onClick) 
  }
    }

class NotificationsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Notifications(element)
    })
  }
}

export default NotificationsCollection







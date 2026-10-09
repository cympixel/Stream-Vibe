const rootSelector = '[data-js-search]'

class Search {
  stateClasses = {
        isActive: 'active',     
        isLock:   'is-lock',
        hide:'hide',
        visuallyHidden:'visually-hidden'  
    }

    selectors = {
        searchButton: '[data-js-search-button]',
        overlay: '[data-js-search-overlay]',
        closeButton: '[data-js-search-close-button]',
        fieldWrapper: '[data-js-search-field]',
        navigation:'[data-js-navigation]'
    }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.searchButtonElement  = this.rootElement.querySelector(this.selectors.searchButton);
    this.overlayElement       = this.rootElement.querySelector(this.selectors.overlay);
    this.fieldWrapperElement  = this.rootElement.querySelector(this.selectors.fieldWrapper);
    this.navigationElement = this.rootElement.closest('header')?.querySelector(this.selectors.navigation);
    this.bindEvents()
  }

    onClick = (event) =>{
    const {target} = event
    const isButtonClick = this.searchButtonElement.contains(target);
    const isOutsideOverlayClick = !target.closest(this.selectors.overlay);

    if(!isButtonClick && isOutsideOverlayClick && this.overlayElement.classList.contains(this.stateClasses.isActive)){
        this.toggleSearch()
        return
        }
    }

    toggleSearch= () =>{
    this.searchButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.navigationElement.classList.toggle(this.stateClasses.hide)
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
    this.searchButtonElement.addEventListener('click', this.toggleSearch);
    document.addEventListener('click', this.onClick)
    document.addEventListener('keydown', this.onEscapeKeyDown);
    document.addEventListener('keydown', this.onCtrlKKeyDown);
    
  }
    }

class SearchCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Search(element)
    })
  }
}

export default SearchCollection
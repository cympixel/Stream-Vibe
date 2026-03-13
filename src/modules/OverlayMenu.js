class OverlayMenu {
    selectors = {
        root:'[data-js-overlay-menu]',
        dialog:'[data-js-overlay-menu-dialog]',
        burgerButtom:'[data-js-overlay-menu-burger-button]'
    }

    stateClasses ={
        isActive:'is-active',
        isLock:'is-lock'
    }


    constructor(){
        this.rootElement = document.querySelector(this.selectors.root)
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
        this.burgerButtomElement = this.rootElement.querySelector(this.selectors.burgerButtom)
        
        this.bindEvents()
    }

    onBurgerButtonClick = () =>{
        this.burgerButtomElement.classList.toggle(this.stateClasses.isActive)
        this.dialogElement.open = !this.dialogElement.open
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    bindEvents(){
        this.burgerButtomElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default OverlayMenu
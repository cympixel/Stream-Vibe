import classNames from 'classnames';
import './Search.scss';
import Button from '../Button';


export default (props) => {
  const {className} = props
  return (
    <div class={classNames('search', className)} data-js-search="">

      <button class="search__button button button--transparent" 
      title="Search" aria-label="Search" 
      type="button" 
      data-js-search-button="">
        <span class="button__icon icon">
          <svg class="search__button-icon" viewBox="0 0 24 24" width="24" height="24">
    
            <line class="search__button-icon-handle" x1="17" y1="17" x2="22" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
         
            <circle class="search__button-icon-glass" cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
              
            <line class="search__button-icon-x1" x1="6"  y1="6"  x2="18 " y2="18 " stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line class="search__button-icon-x2" x1="6"  y1="18 " x2="18 " y2="6"  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
      </button>

    {/* <Button className='search__button'
        label='Search' 
        isLabelHidden
        iconName='search'
        mode='transparent'
        hasFill
        extraAttrs={{'data-js-search-button':""}}
        /> */}
  
    <div class="search__overlay" data-js-search-overlay="">
      <search class="search__panel" role="search">
    
        <form action="/search" method="get" >
          <div class="search__field" data-js-search-field="">
            <input
              type="search"
              id="search-field"
              placeholder="Что ищем?"
              required
              autofocus
              aria-label="Поле поиска"
            />

            <button class="search__submit-button button button--transparent" 
            title="Search" aria-label="Search" 
            type="submit" 
            data-js-search-submit-button="">
              <span class="button__icon icon">
                <svg class="search__button-icon" viewBox="0 0 24 24" width="24" height="24">
          
                  <line class="search__button-icon-handle" x1="17" y1="17" x2="22" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              
                  <circle class="search__button-icon-glass" cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    
                </svg>
              </span>
            </button>
        
          </div>
        </form>
      </search>
    </div>
</div>
  )
}


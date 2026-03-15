import Tabs from '@/components/Tabs';
import './Collections.scss';
import collectionGroups from './CollectionGroups';
import getIdFromTitle from '@/utils/getIdFromTitle';
import Section from '@/layouts/Section';
import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import Slider from '@/components/Slider';
import CategoryCard from '@/components/CategoryCard';
import MovieCard from '@/components/MovieCard';

export default () => {
  return (
    <Tabs className="collections container"
    title='collections'
    isEnableOnlyOnMobile 
    items={
      collectionGroups.map((collectionGroup)=>({
        isActive:collectionGroup.isActive,
        title:collectionGroup.title,
        children:(
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index)=>{
              const {
                title,
                categoryItems,
                movieItems,
                sliderParams,
                id
              } = collectionItem

              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return(
                <Section
                className="collections__section"
                id={id}
                title={title}
                titleId={titleId}
                actions={(
                  <SliderNavigation
                  id={sliderNavigationId}
                  mode='tile'
                  isHiddenTablet/>
                )}
                isActionsHiddenOnMobile
                key={index}>
                  <Slider
                  sliderParams={sliderParams}
                  navigationTargetElementId={sliderNavigationId}
                  isBeyondTheViewportOnMobileS>

                    {categoryItems?.map((categoryItem, index)=>(
                      <CategoryCard {...categoryItem} key={index}/>
                    ))
                     ?? 
                     movieItems?.map((movieItem, index)=>(
                      <MovieCard {...movieItem} key={index}/>
                     ))}

                  </Slider>
                </Section>
              )
            })}
          </div>
        )
         
      }))
    }
    >
      
    </Tabs>
  )
}


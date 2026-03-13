import Section from '@/layouts/Section';
import CategoryCard from '@/components/CategoryCard';
import Slider from '@/components/Slider';
import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import categoryItems from './categoryItems';

export default () => {
  

  return (
    <Section
    title={'Explore our wide variety of categories'}
    titleId={'categories-title'}
    description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}
    actions={(
      <SliderNavigation 
      mode='tile'
      id='categories-slider-navigation'/>
    )}
    actionHidden
    > 
      <Slider
      navigationTargetElementId='categories-slider-navigation'
      isBeyondTheViewportOnMobileS
      hasScrollBar
      >
        {categoryItems.map((categoryItem, index) =>(
        <CategoryCard {...categoryItem} key={index}/>
      ))}
      </Slider>

    </Section>
  )
}


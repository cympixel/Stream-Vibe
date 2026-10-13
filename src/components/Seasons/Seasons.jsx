import './Seasons.scss';
import AccordionGroup from '../AccordionGroup';
import seasonItems from './seasonItems';
import Accordion from '../Accordion';
import EpisodeCard from '../EpisodeCard';

export default () => {
  return (
    <div className="seasons">
      <AccordionGroup 
      className='seasons'
      mode='dark' 
      isOrderedList={false}>
        {seasonItems.map(({title, subtitle, episodes}, index)=>(
          <Accordion
          title={title}
          titleLevelClassName = 'h4'
          subtitle={subtitle}
          id={`season-${index}`}
          name='seasons'
          isOpen = {index === 0}
          key = {index}
          isArrowButton
          >
            <ul className="seasons__list">
              {episodes.map((episode, index)=>(
                <li className="seasons__item" key={index}>
                  <EpisodeCard {...episode} key={index}/>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </AccordionGroup>
    </div>
  )
}


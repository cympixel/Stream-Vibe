import Section from '@/layouts/Section';
import './Questions.scss';
import Button from '@/components/Button';
import AccordionGroup from '@/components/AccordionGroup';
import Accordion from '@/components/Accordion';
import basePath from '@/constants/Path';

export default (props) => {

  const {onSupportPage=false} = props

  const questionsItems = [
    'What is StreamVibe?',
    'How do I sign up for StreamVibe?',
    'What is the StreamVibe free trial?',
    'How much does StreamVibe cost?',
    'How do I contact StreamVibe customer support?',
    'What content is available on StreamVibe?',
    'What are the StreamVibe payment methods?',
    'How can I watch StreamVibe?'
  ]
  return (
    <Section
          id="questions"
          title="Frequently Asked Questions"
          titleId="questions-title"
          description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          actions ={
              <Button label='Ask a Question'  href={!onSupportPage ? `${basePath}support` : '#contact-us'}/>
          }
        >
         <AccordionGroup columns={2}>
          {questionsItems.map((question, index)=>(
            <Accordion 
            title={question}
            id={`question-${index}`}
            name='questions'
            isOpen={index === 0}
            key={index}
            >
              <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand. </p>
            </Accordion>
          ))}
         </AccordionGroup>
    </Section>
  )
}


import basePath from '@/constants/Path';
import './Banner.scss';
import Button from '@/components/Button';


export default () => {
  const titleId = 'banner-title'

  return (
    <section className="banner container" aria-labelledby={titleId}>
      <div className="banner__inner">
        <div className="banner__body">
            <h2 className="banner__title" id={titleId}>
              Start your free trial today!
            </h2>
            <div className="banner__desc">
              <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
        </div>
        <Button className='banner__btn' label='Start a Free Trail' href={`${basePath}/subscriptions`}/>
      </div>
    </section>
  )
}


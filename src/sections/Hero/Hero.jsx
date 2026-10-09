import './Hero.scss'
import Button from '@/components/Button';
import playImgSrc from '@/assets/images/play.svg'
import basePath from '@/constants/Path';

export default () => {
  return (
    <section className="hero" aria-labelledby='hero-title'>
        <div className="hero__pano">
          <div className="hero__pano-inner container ">
            <button className="hero__play-button" 
            type='button' 
            aria-label={'Play video'}
            title={'Play video'}
            >
             <img 
              className='hero__play-button-image' 
              src={playImgSrc} 
              alt="" 
              />  
            </button>
          </div>
        </div>
        <div className="hero__body">
          <div className="hero__body-inner container">
            <h1 className="hero__title" id='hero-title'>
              The Best Streaming Experience
            </h1>
            <div className="hero__description">
              <p>
                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
              </p>            
            </div>
            <Button 
            className='hero__button' 
            iconName='play'
            label='Start Watching Now'
            href={ `${basePath}/movies`}
            hasFillIcon/>
          </div>
        </div>
    </section>
  )
}


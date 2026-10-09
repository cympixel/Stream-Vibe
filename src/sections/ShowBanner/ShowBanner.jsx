import './ShowBanner.scss';
import MovieBannerCard from '@/components/MovieBannerCard';

export default () => {
const titleId = 'show-banner-title'

  return (
    <div className="ShowBanner">
      <section 
      className="container"
      aria-labelledby={titleId}
      >
        <MovieBannerCard 
        imgSrc='/src/assets/images/movie-banner/3.jpg'
        title="Stranger Things" 
        titleId={titleId}
        TitleTag='h1'
        desc="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        isSmallPaddingY/>
      </section>
    </div>
  )
}


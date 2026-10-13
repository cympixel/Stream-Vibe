import './MovieBanner.scss';
import MovieBannerCard from '../../components/MovieBannerCard';

export default () => {
  
  const titleId = 'movie-banner--title'

  return (
    <section className="container" aria-labelledby={titleId}>
      <MovieBannerCard 
      title='Kantara'
      titleId = {titleId}
      TilteTag ='h1'
      desc='A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
      imgSrc='/src/assets/images/movie-banner/2.jpg'
      isSmallPaddingY/>
      
    </section>
  )
}


import './MoviesBanner.scss'
import Slider from '@/components/Slider'
import MovieBannerCard from '@/components/MovieBannerCard'

export default () => {
  const titleId = 'movies-banner-title'

  const movieCards = [
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 2',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 3',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers : Endgame 4',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
  ]

  return (
    <section
      className="movies-banner container"
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          slidesPerView: 1
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
        navigationJustifyContent = 'space-between'
      >
        {movieCards.map((movieCard, index) => (
          <MovieBannerCard{...movieCard} key={index} />
        ))}
      </Slider>
    </section>
  )
}



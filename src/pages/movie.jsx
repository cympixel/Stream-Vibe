import MovieBanner from "@/sections/MovieBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title:'Movie - Kantara',
  description:' Kantara: The king enters into an agreement with the forest deity Pandzhurli: in exchange for peace and prosperity granted by the deity, the king gives to the forest tribe',
  link:'https://cympixel.github.io/Stream-Vibe/movie',
}

export default function () {
  return (
    <>
    <MovieBanner/>
    <MovieDetails/>
    </>
   
  )
}

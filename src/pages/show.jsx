import Seasons from "@/components/Seasons"
import MovieDetails from "@/sections/MovieDetails"
import ShowBanner from "@/sections/ShowBanner"

export const metadata = {
  title:'Show - Stranger Things',
  description:'Stranger Things: The 1980s, a quiet provincial American town. The peaceful course of local life is disrupted by the mysterious disappearance of a teenager named Will.',
  link:'https://cympixel.github.io/Stream-Vibe/show',
}

export default function () {
  return (
    <>
        <ShowBanner />
        <MovieDetails seasons={<Seasons/>}/>
    </>
   
  )
}

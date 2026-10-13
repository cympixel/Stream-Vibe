import Collections from "@/sections/Collections"
import MoviesBanner from "@/sections/MoviesBanner"

export const metadata = {
  title:'Movies',
  description:'Explore the StreamVibe library by genre. Find trending hits, new releases and fan favorites to watch on demand.',
  link:'https://cympixel.github.io/Stream-Vibe/movies',
}

export default function () {
  return (
    <>
     <MoviesBanner/>
     <Collections/>
    </>
   
  )
}

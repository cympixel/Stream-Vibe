import Collections from "@/sections/Collections"
import MoviesBanner from "@/sections/MoviesBanner"

export const metadata = {
  title:'Movies',
}

export default function () {
  return (
    <>
     <MoviesBanner/>
     <Collections/>
    </>
   
  )
}

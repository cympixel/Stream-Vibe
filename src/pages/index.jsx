import Hero from "@/sections/Hero"
import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Questions from "@/sections/Questions"
import Plans from "@/sections/Plans"

export const metadata = {
  title:'Home',
  description:'"StreamVibe: watch the latest blockbusters, classic movies and popular TV shows on demand, on any device.',
  link:'https://cympixel.github.io/Stream-Vibe/',
  isHeaderFixed : true
}

export default function () {
  return (
    <>
     <Hero/>
     <Categories/>
     <Devices/>
     <Questions/>
     <Plans/>
    </>
  )
}

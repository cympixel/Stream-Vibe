import PlansComparison from "@/components/PlansComparison"
import Plans from "@/sections/Plans"

export const metadata = {
  title:'Subscriptions',
  description:'Choose the StreamVibe plan that fits you. Monthly from $9.99 or yearly from $39.99, with a free trial to get started.',
  link:'https://cympixel.github.io/Stream-Vibe/subscriptions',
}

export default function () {
  return (
    <>
        <PlansComparison/>
        <Plans/>
    </>
   
  )
}

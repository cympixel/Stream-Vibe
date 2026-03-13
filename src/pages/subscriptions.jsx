import PlansComparison from "@/components/PlansComparison"
import Plans from "@/sections/Plans"

export const metadata = {
  title:'Subscriptions',
}

export default function () {
  return (
    <>
        <PlansComparison/>
        <Plans/>
    </>
   
  )
}

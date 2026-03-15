import Questions from "@/sections/Questions"
import Support from "@/sections/Support"

export const metadata = {
  title:'Support',
}

export default function () {
  return (
    <>
        <Support/>
        <Questions onSupportPage={true}/>
    </>
   
  )
}

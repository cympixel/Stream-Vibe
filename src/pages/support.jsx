import Questions from "@/sections/Questions"
import Support from "@/sections/Support"

export const metadata = {
  title:'Support',
  description:'Need help with StreamVibe? Find answers about accounts, billing and playback, or contact our support team.',
  link:'https://cympixel.github.io/Stream-Vibe/subscriptions',
}

export default function () {
  return (
    <>
        <Support/>
        <Questions onSupportPage={true}/>
    </>
   
  )
}

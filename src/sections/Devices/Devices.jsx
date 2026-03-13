import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import DeviceCard from '@/components/DeviceCard'
import deviceImgSrc_1 from '@/assets/images/devices/1.svg'
import deviceImgSrc_2 from '@/assets/images/devices/2.svg'
import deviceImgSrc_3 from '@/assets/images/devices/3.svg'
import deviceImgSrc_4 from '@/assets/images/devices/4.svg'
import deviceImgSrc_5 from '@/assets/images/devices/5.svg'
import deviceImgSrc_6 from '@/assets/images/devices/6.svg'

const Devices = () => {
  
  const deviceItems = [
    {
      title: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_1,
    },
    {
      title: 'Tablet',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_2,
    },
    {
      title: 'Smart TV',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_3,
    },
    {
      title: 'Laptops',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_4,
    },
    {
      title: 'Gaming Consoles',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_5,
    },
    {
      title: 'VR Headsets',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: deviceImgSrc_6,
    },
  ]

  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    >
      <Grid columns={3}>
        {deviceItems.map((deviceItem, index) => (
          <DeviceCard {...deviceItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Devices

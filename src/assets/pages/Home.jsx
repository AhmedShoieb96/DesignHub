import SimpleSlideshow from '../components/slideShow/Slider'
import WhatsAppIcon from '../components/watsAppIcon/WhatsAppIcon'
import PhoneIcon from '../components/phoneIcon/PhoneIcon'
import ImageSlider from '../components/imagesSlideShow/ImageSlider'
import ProjectsSection from '../components/Projects/ProjectsSection'
import ContactForm from '../components/contactSection/ContactSection'

export default function Home() {
  return (
    <>
      <SimpleSlideshow />
      <WhatsAppIcon />
      <PhoneIcon />
      <ImageSlider />
      <ProjectsSection />
      <ContactForm />
    </>
  )
}

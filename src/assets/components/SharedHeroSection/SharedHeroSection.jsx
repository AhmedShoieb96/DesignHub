
import cover from '../../images/sharedHero4.jpg'
import './SharedHeroSection.css'
const SharedHeroSection = ({children}) => {
  

 


  return (
    <div className='heroSection-container'>
      <img src={cover} alt='cover' className='heroSection-image' />

      <div className='gradient-overlay'> {children}</div>
    </div>
  )
}
export default SharedHeroSection

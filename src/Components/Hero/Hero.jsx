import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="profile"/>
      <h1><span>I am Baltazar,</span> fullstack developer based in Argentina.</h1>
      <p>I am a fullstack developer with more than 2 years of experience</p>
      <div className='hero-action'>
        <div className="hero-connect">          
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
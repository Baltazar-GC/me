import './Hero.css'
import profile_img from '../../assets/profile.png'
import resume from '../../assets/BaltazarGarcia_En.pdf'
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
        <a className='hero-resume' href={resume} download="Baltazar_Resume.pdf">My resume</a>
      </div>
    </div>
  )
}

export default Hero
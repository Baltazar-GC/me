import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="about" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="profile_image" />
            </div>
            <div className="about-right">
            <div className="about-para">
                <p>I am a Fullstack Developer with over 2 years of professional experience in backend development. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for development is not only reflected in my professional experience but also in my personal projects, where I have gained skills in frontend development. I bring enthusiasm and dedication to each project I undertake.</p>
            </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>.NET</p>
                        <hr style={{width: "75%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>C#</p>
                        <hr style={{width: "70%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
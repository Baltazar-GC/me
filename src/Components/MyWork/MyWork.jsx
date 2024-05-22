import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="my-work" />
        </div>
        <div className="mywork-container">
            {mywork_data?.map((work, index) => (
                <img src={work.w_img} alt={index} key={index}/>
            ))}
        </div>
        {/* <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="show more" />
        </div> */}
    </div>
  )
}

export default MyWork
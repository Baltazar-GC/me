import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My services</h1>
        <img src={theme_pattern} alt="services" />
      </div>
      <div className="services-container">
        {Services_Data?.map((service, index) => (
          <div className="services-format" key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt='read more'/>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
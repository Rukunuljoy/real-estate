import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import SliderButton from './SliderButton'
import {sliderSettings} from '../../utils/Commons.js'


const  Residencies=()=> {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>popular residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButton/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image}alt='home'/>

                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$ </span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
import { useSwiper } from "swiper/react";

const SliderButton = () => {
    const swiper = useSwiper()
    return (
        <div>
           <div className="r-buttons">
                <button onClick={()=>swiper.slidePrev()}>&lt;</button>
                <button onClick={()=>swiper.slideNext()}>&gt;</button>
            </div> 
        </div>
    );
};

export default SliderButton;
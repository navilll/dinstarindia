"use client"

import Image from "next/image";
import IMAGES from "../component/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
    {image1: IMAGES.LogoGray1, image2:IMAGES.Logobrown1},
    {image1: IMAGES.LogoGray2, image2:IMAGES.Logobrown2},
    {image1: IMAGES.LogoGray3, image2:IMAGES.Logobrown3},
    {image1: IMAGES.LogoGray4, image2:IMAGES.Logobrown4},
    {image1: IMAGES.LogoGray5, image2:IMAGES.Logobrown5},
    {image1: IMAGES.LogoGray6, image2:IMAGES.Logobrown6},
    {image1: IMAGES.LogoGray4, image2:IMAGES.Logobrown4},
];

const ClientSwiper = () => {
    return (
        <Swiper           
            speed = {1500}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay = {{
                delay: 2500,
            }}                
            className="swiper-container clients-swiper"    
            modules={[Autoplay]}
            breakpoints={{
                1191: {
					slidesPerView: 6,
				},
				991: {
					slidesPerView: 5,
				},
				691: {
					slidesPerView: 4,
				},
				591: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
            }}
        > 
        
            {sliderData.map((item, i)=>(
                <SwiperSlide key={i}>
                    <div className="clients-logo">
                        <Image className="logo-main" src={item.image1} alt="" />
                        <Image className="logo-hover" src={item.image2} alt="" />
                    </div>
                </SwiperSlide>	
            ))}  
        </Swiper>
    );
};

export default ClientSwiper;
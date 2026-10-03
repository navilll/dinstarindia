"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import Image from "next/image";
import IMAGES from "../component/theme";

const sliderData = [
    {image: IMAGES.Team1, name:'Andrey Carol', design:""},
    {image: IMAGES.Team2, name:'Rebecca Ruth', design:"m-t40"},
    {image: IMAGES.Team3, name:'Austin Doe', design:""},
    {image: IMAGES.Team4, name:'Lala Rose', design:"m-t40"},
    {image: IMAGES.Team2, name:'Rebecca Ruth', design:""},
    {image: IMAGES.Team3, name:'Austin Doe', design:"m-t40"},
    {image: IMAGES.Team4, name:'Lala Rose', design:""},
    {image: IMAGES.Team2, name:'Rebecca Ruth', design:"m-t40"},
];

const TeamSlider = () => {
    return (        
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            speed = {1500}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay = {{
                delay: 2500,
            }}                
            className="swiper-container team-swiper"
            modules={[Autoplay,Navigation]}
            navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
            }}
            breakpoints={{
                1200: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                575: { slidesPerView: 2 },
                240: { slidesPerView: 1 },
            }}
        >
            {sliderData.map((item, i)=>(
                <SwiperSlide key={i}>
                    <div className={`dz-team style-1 text-center m-b30 overlay-shine ${item.design}`}>
                        <motion.div className="dz-media shadow"
                            initial={{ opacity: 0, y: "-10%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <Link href={"#"} scroll={false}><Image src={item.image} alt="" /></Link>
                            <ul className="team-social">
                                <li><Link href={"#"} scroll={false}><i className="fab fa-facebook-f"/></Link></li>
                                <li><Link href={"#"} scroll={false}><i className="fab fa-instagram"/></Link></li>
                                <li><Link href={"#"} scroll={false}><i className="fab fa-twitter"/></Link></li>
                                <li><Link href={"#"} scroll={false}><i className="fab fa-youtube"/></Link></li>
                            </ul>
                        </motion.div>
                        <div className="dz-content">
                            <h5 className="dz-name"><Link href={"#"} scroll={false}>{item.name}</Link></h5>
                            <h6 className="dz-position text-primary">Director</h6>
                        </div>
                    </div>
                </SwiperSlide>	
            ))} 
            <div className="testimonial-swiper text-center m-t30">                  
                <div className="btn-prev swiper-button-prev4 pe-3 c-pointer"><i className="las la-long-arrow-alt-left" />PREV</div>
                <div className="btn-next swiper-button-next4 ps-3 c-pointer">NEXT<i className="las la-long-arrow-alt-right" /></div>
            </div>           
        </Swiper>
    );
};

export default TeamSlider;
"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import IMAGES from '../component/theme';

const sliderData = [
    { image: IMAGES.Testimonial1, name:'Shaan', position:'Call Centre Manager', quote:"Dinstar India's commitment to high-quality telecommunication solutions shines through its innovative IP phones. They help our agents stay connected, and the focus on local manufacturing and quality is clear."},
    { image: IMAGES.Testimonial2, name:'David', position:'Business Customer', quote:'The Dinstar IP phone delivers the performance and reliability our call centre needs. Its useful features have boosted productivity and helped streamline our operations.'},
    { image: IMAGES.Testimonial3, name:'Anjali', position:'Enterprise Customer', quote:'Reliable connectivity, crystal-clear voice quality, and seamless integration have made a real difference for our team. Dinstar India sets a high standard for IP phone solutions.'},
    { image: IMAGES.Testimonial2, name:'Shaan', position:'Call Centre Manager', quote:"Dinstar India's commitment to high-quality telecommunication solutions shines through its innovative IP phones. They help our agents stay connected, and the focus on local manufacturing and quality is clear."},
];

interface navButton {
    buttn1: string;
    buttn2: string;
}

const Testimonail = ({buttn1, buttn2}: navButton) => {
    return (
        <>            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 m-b20">                       
                        <Swiper                            
                            speed = {1500}
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay = {{
                                delay: 1500,
                            }}                
                            className="swiper-container testimonial-swiper"
                            modules={[Autoplay, Navigation]}
                            navigation={{
                                prevEl: `.${buttn1}`,
                                nextEl: `.${buttn2}`,
                            }}
                            breakpoints={{
                                1191: {
                                    slidesPerView: 3,
                                },
                                691: {
                                    slidesPerView: 2,
                                },
                                320: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {sliderData.map((item, i)=>(
                                <SwiperSlide key={i}>
                                    <div className="testimonial-1 text-center">
                                        <div className="testimonial-info">
                                                <div className="sep-tl"></div>
                                                <div className="sep-br"></div>
                                                <div className="testimonial-text">
                                                    <p>{item.quote}</p>
                                                </div>
                                            <div className="testimonial-detail">
                                                <ul className="star-rating text-primary">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <h5 className="testimonial-name text-white">{item.name}</h5> 
                                                <span className="testimonial-position text-primary">{item.position}</span> 
                                            </div>
                                        </div>
                                        <div className="testimonial-pic">
                                            <Image src={item.image} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonail;
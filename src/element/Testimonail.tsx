"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import IMAGES from '../component/theme';

const sliderData = [
    {
        image: IMAGES.Testimonial1,
        name: 'Seema',
        position: 'Call Centre Manager',
        quote: "Dinstar India's reliable IP phone solutions have made communication easier for our call centre. The clear voice quality, practical features, and dependable connectivity help our agents stay productive while supporting our day-to-day operations."
    },
    {
        image: IMAGES.Testimonial2,
        name: 'David',
        position: 'Business Customer',
        quote: "The Dinstar IP phone provides the performance and reliability our business needs every day. Its useful features, clear audio, and seamless connectivity have improved communication between our teams and helped us maintain a more efficient workflow."
    },
    {
        image: IMAGES.Testimonial3,
        name: 'Deepak',
        position: 'Enterprise Customer',
        quote: "Reliable connectivity, crystal-clear voice quality, and smooth integration have made a noticeable difference for our organization. Dinstar India's professional IP phone solutions give our team the confidence to communicate efficiently across different business operations."
    },
    {
        image: IMAGES.Testimonial2,
        name: 'Shaan',
        position: 'Call Centre Manager',
        quote: "Dinstar India's high-quality telecommunication solutions have helped our call centre maintain dependable communication. The innovative IP phones offer clear conversations, useful features, and reliable connectivity that support our agents and improve overall productivity."
    },
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
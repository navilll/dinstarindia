"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import {FreeMode, Autoplay, Navigation, Pagination,
    Parallax, Thumbs } 
from "swiper/modules";
import IMAGES from '../component/theme';
import { useRef, useState } from "react";


const swiperDataBlog = [
    {
        image: IMAGES.MainSlider4,
        title: 'OFFICIAL DISTRIBUTOR IN INDIA',
        description: "Dinstar India's cutting-edge telecommunication products set new standards for innovation and quality.",
        thumbTitle: 'State-of-the-art products',
    },
    {
        image: IMAGES.MainSlider5,
        title: 'VoIP AND IP COMMUNICATION',
        description: 'Tailored communication solutions help industries improve efficiency, productivity, and growth.',
        thumbTitle: 'Empowering industries',
    },
    {
        image: IMAGES.MainSlider1,
        title: 'BUSINESS COMMUNICATION',
        description: 'Reliable, seamless communication keeps businesses, teams, and customers connected.',
        thumbTitle: 'Enhancing connectivity',
    },
];

const thumSliderData = [
    {number: '01'},
    {number: '02'},
    {number: '03'},
];

const Index3HomeSlider = () => {    
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            <div className="silder-three">
                <Swiper                
                    speed = {2000}
                    slidesPerView={1}
                    spaceBetween={0}
                    parallax= {true}
                    loop={true}
                    autoplay = {{
                        delay: 2500,
                    }}             
                    
                    thumbs={{ swiper: thumbsSwiper }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination-white",
                    }}
                    className="swiper-container main-silder-swiper-03"
                    modules={[Autoplay, Navigation, Pagination, Parallax, Thumbs]}
                    navigation={{
                        prevEl: ".swiper-button-home-prev",
                        nextEl: ".swiper-button-home-next",
                    }}                
                >

                    {swiperDataBlog.map((data, i)=>(
                        <SwiperSlide key={i}>
                            <div className="silder-img overlay-black-middle">
                                <Image src={data.image} data-swiper-parallax="30%" alt="" />
                            </div>
                            <div className="silder-content">
                                <div className="inner-content">
                                    <h1 className="title"><span className="text-primary">DINSTAR INDIA</span> {data.title}</h1>
                                    <p className="m-b30">{data.description}</p>
                                    <Link href="/solutions" className="btn shadow-primary btn-primary">EXPLORE SOLUTIONS <i className="m-l10 fas fa-caret-right" /></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    <div className="slider-one-pagination">
                        <div className="btn-prev swiper-button-home-prev swiper-button-white c-pointer"><i className="fas fa-chevron-left" /></div>
                        <div className="btn-next swiper-button-home-next swiper-button-white c-pointer"><i className="fas fa-chevron-right" /></div>
                    </div>
                </Swiper>                
                
                <Swiper             
                    slidesPerView={3}
                    spaceBetween={0}
                    freeMode= {true}                    
                    watchSlidesProgress= {true}  
                    parallax= {true}                    
                    autoplay = {{
                        delay: 2500,
                    }}              
                    onSwiper={setThumbsSwiper} 
                    className="swiper-container swiperThumbsHome"
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints= {{
                        1280: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {thumSliderData.map((item, i)=>(
                        <SwiperSlide key={i}>
                            <div className="thumb-content">
                                <div className="number">{item.number}</div>
                                <h6 className="thumb-title">{swiperDataBlog[i].thumbTitle}</h6>
                            </div>
                        </SwiperSlide>
                    ))}                                       
                </Swiper>
                <div className="scroll-down">
                    Scroll Down
                </div>
            </div>  
        </>
    );
};

export default Index3HomeSlider;
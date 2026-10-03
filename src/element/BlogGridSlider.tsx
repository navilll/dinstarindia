"use client"

import React from 'react';
import IMAGES from '../component/theme';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from 'next/link';

const BlogGridSlider = () => {
    return (
        <Swiper           
            speed = {1500}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay = {{
                delay: 2500,
            }}                
            className="swiper-container post-swiper"            
            navigation={{
                prevEl: ".prev-post-swiper-btn",
                nextEl: ".next-post-swiper-btn",
            }}  
            modules={[Autoplay, Navigation]}            
        >  
            <SwiperSlide>
                <Link href="/blog-details"><Image src={IMAGES.BlogPic2} alt="" /></Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/blog-details"><Image src={IMAGES.BlogPic1}alt="" /></Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/blog-details"><Image src={IMAGES.BlogPic3} alt="" /></Link>
            </SwiperSlide>        
            <div className="prev-post-swiper-btn c-pointer"><i className="la fa-angle-left" /></div>
            <div className="next-post-swiper-btn c-pointer"><i className="la fa-angle-right" /></div>
        </Swiper>
    );
};

export default BlogGridSlider;
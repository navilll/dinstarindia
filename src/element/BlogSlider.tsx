"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from 'next/link';
import { motion } from "framer-motion";
import IMAGES from '../component/theme';

const blogSliderData = [
    {image: IMAGES.BlogGridPic1, name:'Choosing the right VoIP gateway for your business', excerpt:'Explore the role of VoIP gateways in connecting legacy infrastructure with modern IP communication.'},
    {image: IMAGES.BlogGridPic2, name:'How IP PBX systems support growing teams', excerpt:'Learn how unified business communication can improve collaboration across locations.'},
    {image: IMAGES.BlogGridPic3, name:'Building reliable communication for every industry', excerpt:'Discover scalable communication options for education, healthcare, hospitality, and enterprise.'},
    {image: IMAGES.BlogGridPic2, name:'Choosing the right VoIP gateway for your business', excerpt:'Explore the role of VoIP gateways in connecting legacy infrastructure with modern IP communication.'},
];

const BlogSlider = () => {
    return (
        
        <Swiper           
            speed = {1500}
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            autoplay = {{
                delay: 2500,
            }}                
            className="swiper-container blog-swiper"         
            modules={[Autoplay]}
            breakpoints={{
                1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
            }}
        >        
            {blogSliderData.map((item, i)=>(
                <SwiperSlide key={i}>
                    <motion.div className="dz-card blog-grid style-1"
                        initial={{ opacity: 0, y: "15%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="dz-media">
                            <Link href="/blog-details"><Image src={item.image} alt="" /></Link>
                        </div>
                        <div className="dz-info">
                            <div className="dz-meta">
                                <ul>
                                    <li className="post-date">Dinstar India</li>
                                    <li className="post-user">By <Link href="#" scroll={false}>Our Team</Link></li>
                                </ul>
                            </div>
                            <h5 className="dz-title"><Link href="/blog-details">{item.name}</Link></h5>
                            <div className="dz-post-text text">
                                <p>{item.excerpt}</p>
                            </div>
                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}            
        </Swiper>
    );
};

export default BlogSlider;
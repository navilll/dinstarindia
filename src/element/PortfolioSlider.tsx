"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
import IMAGES from '../component/theme';

interface btnType  {
    prvBtn: string;
    nextBtn: string;
}

interface ImageBlog {
    double? : string
    image1? : any
    image2? : any
    singleimage? : any
}

const galleryBlogData:ImageBlog[] = [
    {double : "doubleimage", image1: IMAGES.WorkPic3, image2: IMAGES.WorkPic2},
    {singleimage: IMAGES.WorkPic4},
    {double : "doubleimage", image1: IMAGES.WorkPic1, image2: IMAGES.WorkPic6},
    {singleimage: IMAGES.WorkPic5},
    {double : "doubleimage", image1: IMAGES.WorkPic3, image2: IMAGES.WorkPic2},
    {singleimage: IMAGES.WorkPic4},
    {double : "doubleimage", image1: IMAGES.WorkPic1, image2: IMAGES.WorkPic6},
    {singleimage: IMAGES.WorkPic5},
];

const PortfolioSlider = ({prvBtn, nextBtn} : btnType) => {    
    return (
        <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            selector=".lightimg"
        >
                <Swiper                   
                    speed = {1500}
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    autoplay = {{
                        delay: 2500,
                    }}                
                    className="swiper-container swiper-portfolio lightgallery"
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: `.${prvBtn}`,
                        nextEl: `.${nextBtn}`,
                    }}
                    breakpoints={{
                        1280: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        591: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                >   
                    {galleryBlogData.map((item,ind)=>{                        
                        if(item.double === "doubleimage"){
                            return(
                                <SwiperSlide key={ind}>
                                    <div className="dz-box overlay style-1">
                                        <div className="dz-media">
                                            <Image src={item.image1} alt="" loading='lazy'/>
                                        </div>
                                        <div className="dz-info">
                                            <span  data-src={item.image1.src} className="view-btn lightimg" title="IP COMMUNICATIONS">
                                               <Link href={item.image1}> <Image src={item.image1} alt="" className='d-none'/></Link>
                                            </span>
                                            <h6 className="sub-title">IP COMMUNICATIONS</h6>
                                            <h4 className="title m-b15"><Link href="/#portfolio">Enterprise IP PBX <span>India</span></Link></h4>
                                        </div>
                                    </div>
                                    <div className="dz-box overlay style-1">
                                        <div className="dz-media">
                                            <Image src={item.image2} alt="" loading='lazy'/>
                                        </div>
                                        <div className="dz-info">
                                            <span  data-src={item.image2.src} className="view-btn lightimg" title="VOIP GATEWAY">
                                                <Image src={item.image2} alt="" className='d-none'/>
                                            </span>
                                            <h6 className="sub-title">VOIP GATEWAY</h6>
                                            <h4 className="title m-b15"><Link href="/#portfolio">Business Connectivity <span>India</span></Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>	
                            )
                        }
                            else{
                                return(
                                    <SwiperSlide key={ind}>
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <Image src={item.singleimage} alt="" loading='lazy'/>
                                            </div>
                                            <div className="dz-info">
                                                <span data-src={item.singleimage.src} className="view-btn lightimg" title="SIP INTERCOM">
                                                    <Image src={item.singleimage} alt="" className='d-none'/>
                                                </span>
                                                <h6 className="sub-title">SIP INTERCOM</h6>
                                                <h4 className="title m-b15"><Link href="/#portfolio">Secure Access Communication <span>India</span></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }                     
                        
                        }
                    )}
            </Swiper>	
        </LightGallery>
    );
};

export default PortfolioSlider;
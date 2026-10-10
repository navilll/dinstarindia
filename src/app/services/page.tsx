import Link from 'next/link';
import BreadcrumbBanner from '@/component/BreadcrumbBanner';
import IMAGES from '../../component/theme';
import ClientSwiper from '../../element/ClientSwiper';
import ProgressSection from '../../element/ProgressSection';
import Testimonail from '../../element/Testimonail';
import TeamSlider from '../../element/TeamSlider';
import Mainlayout from '../../component/Mainlayout';

const serviceData = [
    { image:IMAGES.ServicePic1, name:'Interior Design'},
    { image:IMAGES.ServicePic2, name:'Floor Plan Design'},
    { image:IMAGES.ServicePic3, name:'Construction'},
    { image:IMAGES.ServicePic4, name:'Furniture Production'},
    { image:IMAGES.ServicePic5, name:'Architecture Design'},
    { image:IMAGES.ServicePic6, name:'24X7 Support'},
];

const Services = () => {
    return (
        <Mainlayout>
            <div className="page-content bg-white">
                <BreadcrumbBanner title="OUR SERVICES" current="Services" />
                <section className="content-inner line-img">
                    <div className="container">
                        <div className="row">
                            {serviceData.map((item, i)=>(
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="icon-bx-wraper style-1 m-b30 flip-bx" data-name="1.">
                                        <div className="front overlay-black-middle" style={{backgroundImage: `url(${item.image.src})`}}>
                                            <div className="inner">
                                                <div>
                                                    <div className="sep-tl"></div>
                                                    <div className="sep-br"></div>
                                                    <h4 className="title m-b10">{item.name}</h4>
                                                    <h6 className="sub-title text-primary">WE DESIGN IDEAS</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <div>
                                                    <div className="sep-tl"></div>
                                                    <div className="sep-br"></div>
                                                    <div className="icon-lg">
                                                        <span className="icon-cell text-primary"><i className="flaticon-blueprint-1" /></span> 
                                                    </div>
                                                    <h4 className="title m-b15"><Link href="/services" className="text-white">{item.name}</Link></h4>
                                                    <p>Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="clients-section-1 line-img bg-gray">
                    <div className="container">
                        <ClientSwiper />
                    </div>
                </div>
                <section className="section-full content-inner line-img section-title style-2" data-name="our skills">
                    <ProgressSection />
                </section>
                <section className="content-inner bg-gray section-title style-1 line-img" data-name="Testimonial">
                    <div className="container">
                        <div className="row section-head-bx align-items-center">
                            <div className="col-md-8">
                                <div className="section-head style-1">
                                    <h2 className="title">WHAT OUR <span className="text-primary">CLIENT SAYS</span></h2>
                                    <div className="dz-separator style-1 text-primary"></div>
                                </div>
                            </div>
                            <div className="col-md-4 text-end">
                                <div className="testimonial-swiper m-b30">                
                                    <div className="btn-prev swiper-button-prev3 pe-3 c-pointer"><i className="las la-long-arrow-alt-left" />PREV</div>
                                    <div className="btn-next swiper-button-next3 ps-3 c-pointer">NEXT<i className="las la-long-arrow-alt-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Testimonail buttn1="swiper-button-prev3" buttn2="swiper-button-next3"/>
                </section>
                <section className="content-inner section-title line-img style-2" data-name="Our Team">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h2 className="title">CREATIVE <span className="text-primary">EXPERTISE</span></h2>
                            <div className="dz-separator style-1 text-primary"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 m-b30">
                            <TeamSlider />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Mainlayout>
    );
};

export default Services;

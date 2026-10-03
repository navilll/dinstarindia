import Link from "next/link";
import IMAGES from "../../component/theme";
import Pagebanner from "../../element/Pagebanner";
import AboutUs from "../../element/AboutUs";
import CounterBlog from "../../element/CounterBlog";
import BestFeatures from "../../element/BestFeatures";
import PortfolioSlider from "../../element/PortfolioSlider";
import TeamSlider from "../../element/TeamSlider";
import Testimonail from "../../element/Testimonail";
import BlogSlider from "../../element/BlogSlider";
import Mainlayout from "../../component/Mainlayout";

const About = () => {
  return (
    <Mainlayout>
      <div className='page-content bg-white'>
        <div className='dz-bnr-inr style-1 overlay-white-dark' style={{ backgroundImage: `url(${IMAGES.BanerImg1.src})` }}>
          <Pagebanner maintitle='ABOUT US' currenttitle='About Us' parent='Home' />
        </div>
        <section className='content-inner line-img section-title style-2' data-name='About Us'>
          <AboutUs />
        </section>
        <section className='content-inner-3 bg-gray line-img'>
          <div className='container'>
            <CounterBlog />
          </div>
        </section>
        <section className='content-inner bg-white line-img'>
          <div className='container'>
            <div className='section-head style-1 text-center'>
              <h2 className='title'>
                OUR BEST <span className='text-primary'>FEATURES</span>
              </h2>
              <div className='dz-separator style-1 text-primary'></div>
            </div>
            <BestFeatures />
          </div>
        </section>
        {/*  Our Portfolio  */}
        <section className='content-inner-2 bg-gray line-img pb-1 section-title style-1' data-name='Portfolio'>
          <div className='container'>
            <div className='row align-items-center section-head-bx'>
              <div className='col-md-8'>
                <div className='section-head style-1'>
                  <h2 className='title'>
                    SEE OUR <span className='text-primary'>LATEST WORK</span>
                  </h2>
                  <div className='dz-separator style-1 text-primary'></div>
                </div>
              </div>
              <div className='col-md-4 text-end'>
                <div className='portfolio-pagination d-inline-block mb-5'>
                  <div className='btn-prev swiper-button-prev2 pe-3'>
                    <i className='las la-long-arrow-alt-left'></i>PREV
                  </div>
                  <div className='btn-next swiper-button-next2 ps-3'>
                    NEXT<i className='las la-long-arrow-alt-right'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PortfolioSlider prvBtn='swiper-button-prev2' nextBtn='swiper-button-next2' />
        </section>
        <section className='content-inner section-title style-2 line-img' data-name='Our Team'>
          <div className='container'>
            <div className='section-head style-1 text-center'>
              <h2 className='title'>
                CREATIVE <span className='text-primary'>EXPERTISE</span>
              </h2>
              <div className='dz-separator style-1 text-primary'></div>
            </div>
            <div className='row'>
              <div className='col-lg-12 m-b30'>
                <TeamSlider />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonials --> */}
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
        <section className="content-inner-1 line-img">
          <div className="container">
              <div className="section-head style-1 text-center">
                <h2 className="title">STAY UPDATED <span className="text-primary">WITH US</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div> 
              <div className="blog-area">
                <BlogSlider />
              </div>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default About;

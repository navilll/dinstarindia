"use client"

import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import AboutUs from "@/element/AboutUs";
import BlogSlider from "@/element/BlogSlider";
import ContentSidebar from "@/component/ContentSidebar";
import Header3 from "@/component/Header3";
import HomeFooter from "@/component/HomeFooter";
import Index3HomeSlider from "@/element/Index3HomeSlider";
import PortfolioSlider from "@/element/PortfolioSlider";
import ServiceBlog from "@/element/ServiceBlog";
import TeamSlider from "@/element/TeamSlider";
import Testimonail from "@/element/Testimonail";
import WatchUs from "@/element/WatchUs";

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="page-wraper">
        <Header3 />
        <ContentSidebar />
        <div className="page-content bg-white">
          <Index3HomeSlider />
          <section className="content-inner line-img section-title style-2" data-name="About Us">
            <AboutUs />
          </section>
          <section id="portfolio" className="content-inner-2 bg-gray line-img pb-1 section-title style-1" data-name="Portfolio">
            <div className="container">
              <div className="row align-items-center section-head-bx">
                <div className="col-md-8">
                  <div className="section-head style-1">
                    <h2 className="title">OUR <span className="text-primary">TELECOMMUNICATION SOLUTIONS</span></h2>
                    <div className="dz-separator style-1 text-primary"></div>
                  </div>
                </div>
                <div className="col-md-4 text-end">
                  <div className="portfolio-pagination d-inline-block mb-5">
                    <div className="btn-prev swiper-button-prev2 pe-3 c-pointer"><i className="las la-long-arrow-alt-left"></i>PREV</div>
                    <div className="btn-next swiper-button-next2 ps-3 c-pointer">NEXT<i className="las la-long-arrow-alt-right"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <PortfolioSlider prvBtn="swiper-button-prev2" nextBtn="swiper-button-next2" />
          </section>
          <section className="content-inner-1 line-img overflow-hidden">
            <div className="container">
              <div className="section-head style-1 text-center">
                <h2 className="title">TOP <span className="text-primary">SERVICES</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
              <ServiceBlog />
              <div className="text-center mt-4">
                <Link href="/services" className="btn shadow-primary btn-primary">VIEW ALL SERVICES <i className="m-l10 fas fa-caret-right" /></Link>
              </div>
            </div>
          </section>
          <section className="dz-content-bx style-1 line-img p-t50">
            <WatchUs setOpen={setOpen} />
          </section>
          <section className="content-inner section-title style-2 line-img" data-name="Our Team">
            <div className="container">
              <div className="section-head style-1 text-center">
                <h2 className="title">INDUSTRY <span className="text-primary">SOLUTIONS</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
              <div className="row">
                <div className="col-lg-12 m-b30"><TeamSlider /></div>
              </div>
            </div>
          </section>
          <section className="content-inner bg-gray section-title style-1 line-img" data-name="Testimonial">
            <div className="container">
              <div className="row section-head-bx align-items-center">
                <div className="col-md-8">
                  <div className="section-head style-1">
                    <h2 className="title">OUR HAPPY <span className="text-primary">CLIENTS</span></h2>
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
            <Testimonail buttn1="swiper-button-prev3" buttn2="swiper-button-next3" />
          </section>
          <section className="content-inner-1 line-img">
            <div className="container">
              <div className="section-head style-1 text-center">
                <h2 className="title">TELECOM <span className="text-primary">INSIGHTS</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
              <div className="blog-area"><BlogSlider /></div>
            </div>
          </section>
        </div>
        <HomeFooter />
      </div>
      <ModalVideo channel="youtube" isOpen={isOpen} videoId="4UdeL0kdMMs" onClose={() => setOpen(false)} />
    </>
  );
}

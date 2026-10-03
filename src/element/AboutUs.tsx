"use client"

import React from 'react';
import IMAGES from '../component/theme';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const AboutUs = () => {
    return (
        
        <div className="container">
            <div className="section-head style-1 text-center">
                <h2 className="title">OFFICIAL DINSTAR <span className="text-primary">DISTRIBUTOR IN INDIA</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
            </div>
            <div className="row align-items-center about-bx1">
                <div className="col-lg-6 m-b30">
                    <div className="dz-media">                       
                        <Image src={IMAGES.AboutPic2} alt="about2" className="img1" />                       
                        <motion.div className="img2" 
                            initial={{ opacity: 0, y: "50%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <Image src={IMAGES.AboutPic1} alt="about1" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: "-10%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 1 }}
                    className="col-lg-6 m-b30"
                >
                    <h4 className="title">Trusted Dinstar VoIP and IP Communication Solutions for Every Business</h4>
                    <div className="year-exp shadow m-b30">
                        <h2 className="year text-primary">PAN</h2>
                        <h4 className="text">INDIA <span className="text-primary">DELIVERY</span></h4>
                    </div>
                    <p className="m-b15">As the Official Dinstar Distributor and Trusted Master Distributor in India, we provide genuine Dinstar VoIP and IP Communication Solutions for businesses of all sizes.</p>
                    <p className="m-b30">Our portfolio includes VoIP Gateways, IP PBX Systems, Session Border Controllers (SBC), IP Phones, and SIP Intercoms, backed by expert technical support, competitive pricing, and fast PAN India delivery.</p>
                    <Link href="/about-us" className="btn shadow-primary btn-primary">ABOUT US <i className="m-l10 fas fa-caret-right" /></Link>
                </motion.div>
            </div>
        </div>
      
    );
};

export default AboutUs;
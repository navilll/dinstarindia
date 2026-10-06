import Link from 'next/link';
import React from 'react';
import IMAGES from '../component/theme';

const carddata = [
    {
        image:IMAGES.ServicePic1,
        title:'Call Centre Solutions',
        description:'Optimize customer service with advanced technology, seamless interactions, and more efficient operations.',
    },
    {
        image:IMAGES.ServicePic2,
        title:'Bulk SMS Solutions',
        description:'Reach the right audience with cost-effective campaigns that encourage engagement and response.',
    },
    {
        image:IMAGES.ServicePic3,
        title:'Business Communication',
        description:'Foster collaboration and productivity with reliable connectivity and communication built for your business.',
    },
];

const ServiceBlog = () => {
    return (
        <div className="row justify-content-center">
            {carddata.map((item, index) => (       
                <div className="col-lg-4 col-md-6 aos-item" key={index}>
                    <div className="icon-bx-wraper style-1 m-b30 flip-bx" data-name="1.">
                        <div className="front overlay-black-middle" 
                            style={{backgroundImage: `url(${item.image.src})`}}                                
                        >
                            <div className="inner">
                                <div>
                                    <div className="sep-tl"></div>
                                    <div className="sep-br"></div>
                                    <h4 className="title m-b10">{item.title}</h4>
                                    <h6 className="sub-title text-white">BUILT FOR BUSINESS</h6>
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
                                <h4 className="title m-b15"><Link href="/services" className="text-white">{item.title}</Link></h4>
                                <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}           
        </div>
    );
};

export default ServiceBlog;
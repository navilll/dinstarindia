"use client"

import Image from 'next/image';
import Link from 'next/link';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Pagebanner from '../../element/Pagebanner';
import IMAGES from '../../component/theme';
import BlogGridSlider from '../../element/BlogGridSlider';
import Mainlayout from '../../component/Mainlayout';

const BlogGrid = () => {
    return (
        <Mainlayout>
            <div className="page-content bg-white">
                <div className="dz-bnr-inr style-1 overlay-white-dark" style={{backgroundImage: `url(${IMAGES.BanerImg3.src})`}}>
                    <Pagebanner maintitle='OUR BLOG' currenttitle='Our Blog' parent='Home' />
                </div>
                <div className="content-inner">
                    <div className="container">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 991: 2}}
                        >
                            <Masonry                             
                                gutter='30px'
                            >
                                <div className="card-container">
                                    <div className="dz-card blog-grid style-1 aos-item">
                                        <div className="dz-media">
                                            <Link href="/blog-details"><Image src={IMAGES.BlogPic1} alt="" /></Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">10 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">Praesent pharetra congue sem, nec euismod nisi fermentum.</Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">	
                                    <div className="dz-card blog-grid style-1 aos-item" >
                                        <div className="dz-media">
                                        <BlogGridSlider />
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">7 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">Praesent pharetra congue sem, nec euismod nisi fermentum.</Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">		
                                    <div className="dz-card blog-grid style-1 post-video aos-item">
                                        <div className="dz-media">
                                            <Link href="/blog-details">
                                                <Image src={IMAGES.BlogPic3} alt="" />
                                                <div className="post-video-icon fa fa-play"></div>
                                            </Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">7 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">Praesent pharetra congue sem, nec euismod nisi fermentum.</Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">		
                                    <div className="dz-card blog-grid style-1 aos-item">
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">7 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">“ Praesent pharetra congue sem, nec euismod nisi fermentum sit amet ” </Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">		
                                    <div className="dz-card blog-grid style-1 aos-item">
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">7 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">“ Praesent pharetra congue sem, nec euismod nisi fermentum sit amet ” </Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="dz-card blog-grid style-1 aos-item">
                                        <div className="dz-media">
                                            <Link href="/blog-details"><Image src={IMAGES.BlogPic2} alt="" /></Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">7 March 2024</li>
                                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link href="/blog-details">Praesent pharetra congue sem, nec euismod nisi fermentum.</Link></h3>
                                            <div className="dz-post-text text">
                                                <p>Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.</p>
                                            </div>
                                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </Masonry>
                        </ResponsiveMasonry>
                        <div className="row m-t50">		
                            <div className="col-xl-12 col-lg-12">		
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination text-center m-b30">
                                        <li className="page-item"><Link className="page-link prev" href="#" scroll={false}><i className="la la-angle-left" /></Link></li>
                                        <li className="page-item"><Link className="page-link active" href="#" scroll={false}>1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#" scroll={false}>2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#" scroll={false}>3</Link></li>
                                        <li className="page-item"><Link className="page-link next" href="#" scroll={false}><i className="la la-angle-right" /></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Mainlayout>
    );
};

export default BlogGrid;
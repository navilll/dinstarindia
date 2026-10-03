"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Pagebanner from '../../element/Pagebanner';
import Mainlayout from '../../component/Mainlayout';
import IMAGES from '../../component/theme';
import BlogSidebar from '../../element/BlogSidebar';

const BlogDetails = () => {
    const form = useRef(null);
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();		
		emailjs.sendForm('service_gfykn6i', 'template_iy1pb0b', e.target as HTMLFormElement, 'HccoOtZS6GHw-N-m6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
		(e.target as HTMLFormElement).reset()
	};
    return (
        <Mainlayout>
            <div className="page-content bg-white">
                <div className="dz-bnr-inr style-1 overlay-white-dark" style={{backgroundImage: `url(${IMAGES.BanerImg8.src})`}}>
                    <Pagebanner maintitle='BLOG DETAIL' parent='Blog' currenttitle='Blog Detail' />
                </div>
                <div className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 m-b30 dz-order-1">
                                <aside className="side-bar sticky-top left">
                                    <BlogSidebar />
                                </aside>
                            </div>
                            <div className="col-xl-8 col-lg-8 m-b20">
                                <div className="dz-card blog-single style-1">
                                    <div className="dz-media">
                                        <Image src={IMAGES.BlogPic1} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">7 March 2024</li>
                                                <li className="post-user">By <Link  href="#" scroll={false}>John Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title">Aliquam risus nisl, convallis vitae dolor vitae, vulputate mollis nunc. Fusce at feugiat tellus, ac vestibulum orci.</h4>
                                        <div className="dz-post-text">
                                            <p>In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien. Vestibulum venenatis egestas lacus, a porta elit ornare sit amet. Morbi dapibus efficitur nisi, ut faucibus 
                                            lorem. Morbi interdum odio ac leo vehicula iaculis. Aenean condimentum, erat ac volutpat iaculis, nibh massa pharetra lectus,</p>
                                            <blockquote className="block-quote style-1">
                                                <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                                <cite>Codesign</cite>
                                            </blockquote>
                                            <ul className="wp-block-gallery columns-3">
                                                <li className="blocks-gallery-item"><Image alt="grid1" src={IMAGES.BlogGridPic2} /></li>
                                                <li className="blocks-gallery-item"><Image alt="grid2" src={IMAGES.BlogGridPic1} /></li>
                                            </ul>
                                            <p>Nulla sodales finibus risus. Sed suscipit turpis mi, eget ornare ipsum laoreet ac. Sed pharetra, dui a congue tincidunt, lacus metus consectetur nunc, sit amet laoreet velit nunc vitae diam. Maecenas posuere pellentesque orci at placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                            <h4>20th Century Revolution</h4>
                                            <p>Pellentesque congue at augue et porttitor. Aenean volutpat porttitor euismod. Suspendisse eget pretium augue. Etiam venenatis non elit quis tincidunt.</p>
                                            <p>Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at, accumsan elit.</p>
                                            <h4>Aenean volutpat porttitor euismod.</h4>
                                            <p>Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at, accumsan elit. Aenean ut condimentum purus, et egestas lectus. Nulla pretium justo ex, vel iaculis velit aliquet et. Cras sed nisi id ante congue scelerisque non at eros. In finibus rutrum justo nec fringilla. Etiam id augue ornare, dictum tortor ut, tristique metus.</p>
                                            <p>Proin non ultrices mauris. Nam ultricies justo eu turpis ornare condimentum. Quisque felis tortor, commodo vitae tristique facilisis, luctus rutrum justo.</p>                                        
                                            <p>Aliquam risus nisl, convallis vitae dolor vitae, vulputate mollis nunc. Fusce at feugiat tellus, ac vestibulum orci. Fusce orci risus, pulvinar in rhoncus a, varius et sapien. Nullam porta leo sit amet urna consectetur, at rutrum risus aliquet. Proin vehicula nulla eu quam rhoncus ullamcorper.</p>
                                        </div>
                                        <div className="dz-share-post">
                                            <h5 className="title">SHARE:</h5>
                                            <ul className="dz-social-icon">
                                                <li><Link  href="#" scroll={false} className="fab fa-facebook-f"></Link></li>
                                                <li><Link  href="#" scroll={false} className="fab fa-twitter"></Link></li>
                                                <li><Link  href="#" scroll={false} className="fab fa-instagram"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row extra-blog style-1">
                                    <div className="col-lg-12">
                                        <div className="widget-title">
                                            <h5 className="title">Related Blogs</h5>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="dz-card blog-grid style-1 m-b30">
                                                    <div className="dz-media">
                                                        <Link href="#" scroll={false}><Image src={IMAGES.BlogGridPic1} alt="" /></Link>
                                                    </div>
                                                    <div className="dz-info">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">7 March 2024</li>
                                                                <li className="post-user">By <Link  href="#" scroll={false}>John Doe</Link></li>
                                                            </ul>
                                                        </div>
                                                        <h5 className="dz-title"><Link href="#" scroll={false}>Sed lacinia pulvinar odio, nec tempus augue.</Link></h5>
                                                        <div className="dz-post-text text">
                                                            <p>Aenean ultricies ex eu nunc feugiat auctor. Donec efficitur elementum odio, convallis facilisis augue porttitor.</p>
                                                        </div>
                                                        <Link  href="#" scroll={false} className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>	
                                            <div className="col-md-6">
                                                <div className="dz-card blog-grid style-1 m-b30">
                                                    <div className="dz-media">
                                                        <Link href="#" scroll={false}><Image src={IMAGES.BlogGridPic2} alt="" /></Link>
                                                    </div>
                                                    <div className="dz-info">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">7 March 2024</li>
                                                                <li className="post-user">By <Link  href="#" scroll={false}>John Doe</Link></li>
                                                            </ul>
                                                        </div>
                                                        <h5 className="dz-title"><Link href="#" scroll={false}>Sed lacinia pulvinar odio, nec tempus augue.</Link></h5>
                                                        <div className="dz-post-text text">
                                                            <p>Aenean ultricies ex eu nunc feugiat auctor. Donec efficitur elementum odio, convallis facilisis augue porttitor.</p>
                                                        </div>
                                                        <Link  href="#" scroll={false} className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>	
                                        </div>
                                    </div>	
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area style-1" id="comments">
                                        <div className="widget-title">
                                            <h5 className="title">8 Comments</h5>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                        <div className="clearfix">
                                            
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> 
                                                            <Image  className="avatar photo" src={IMAGES.Testimonial1} alt="" /> 
                                                            <cite className="fn">Celesto Anderson</cite>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="reply"> 
                                                            <Link  href="#" scroll={false} className="comment-reply-link">
                                                            <i className="fa fa-reply" />Reply</Link> 
                                                        </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="comment odd parent">
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard"> 
                                                                    <Image  className="avatar photo" src={IMAGES.Testimonial2} alt="" /> 
                                                                    <cite className="fn">Jake Johnson</cite>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="reply"> 
                                                                    <Link  href="#" scroll={false} className="comment-reply-link">
                                                                        <i className="fa fa-reply" />Reply
                                                                    </Link> 
                                                                </div>
                                                            </div>                                                        
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> 
                                                            <Image  className="avatar photo" src={IMAGES.Testimonial1} alt="" /> 
                                                            <cite className="fn">John Doe</cite> 
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="reply"> 
                                                            <Link  href="#" scroll={false} className="comment-reply-link">
                                                                <i className="fa fa-reply" />Reply
                                                            </Link> 
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            
                                            <div className="comment-respond style-1" id="respond">
                                                <div className="widget-title">
                                                    <h5 className="title">Leave Your Comment</h5>
                                                    <div className="dz-separator style-1 text-primary mb-0"></div>
                                                    <Link style={{display:"none"}} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link>
                                                    <div className="dz-separator bg-primary"></div>
                                                </div>
                                                <form className="comment-form" id="commentform" ref={form} onSubmit={sendEmail}>
                                                    <p className="comment-form-author">
                                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                                        <input type="text" name="Author"  placeholder="Author" id="author" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                                        <input type="text" required placeholder="Email" name="dzEmail" id="email" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label htmlFor="comment">Comment</label>
                                                        <textarea rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn shadow-primary btn-primary btn-icon" id="submit">POST NOW
                                                            <i className="fas fa-caret-right ms-1" />
                                                        </button>
                                                    </p>
                                                </form>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Mainlayout>
    );
};

export default BlogDetails;
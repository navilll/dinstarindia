"use client"
import Image from "next/image";
import IMAGES from "../component/theme";
import Link from "next/link";
import { FormEvent } from "react";

const postsDetail = [
    {image:IMAGES.RecentBlog1, name:'Fusce mollis felis quis tristique'},
    {image:IMAGES.RecentBlog2, name:'Fusce mollis felis quis tristique'},
    {image:IMAGES.RecentBlog3, name:'Fusce mollis felis quis tristique'},
    {image:IMAGES.RecentBlog4, name:'Fusce mollis felis quis tristique'},
];

const monthName = [
    {name:'January', number:'3'},
    {name:'February', number:'4'},
    {name:'March', number:'4'},
    {name:'April', number:'3'},
    {name:'May', number:'4'},
    {name:'Jun', number:'1'},
    {name:'July', number:'3'},
];

const BlogSidebar = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchTerm = formData.get('text');
        console.log(`Search term: ${searchTerm}`);
    };

    return (
       <>       
            <div className="widget widget_tag_cloud">
                <div className="widget-title">
                    <h5 className="title">Search</h5>
                    <div className="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <div className="search-bx">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3" /></button>
                            </span> 
                        </div>
                    </form>
                </div>
            </div>
            <div className="widget widget_categories">
                <div className="widget-title">
                    <h5 className="title">Categories</h5>
                    <div className="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <ul>
                    <li className="cat-item"><Link href="#" scroll = {false}>Residence</Link></li>  
                    <li className="cat-item"><Link href="#" scroll = {false}>Beauty</Link></li>   
                    <li className="cat-item"><Link href="#" scroll = {false}>Fashion</Link></li>  
                    <li className="cat-item"><Link href="#" scroll = {false}>Images</Link></li>   
                    <li className="cat-item"><Link href="#" scroll = {false}>Lifestyle</Link></li> 
                </ul>
            </div>
            <div className="widget recent-posts-entry">
                <div className="widget-title">
                    <h5 className="title">Recent Posts</h5>
                    <div className="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <div className="widget-post-bx">
                    {postsDetail.map((item, i)=>(
                        <div className="widget-post clearfix" key={i}>
                            <div className="dz-media"> 
                                <Link href="/blog-details"><Image src={item.image} alt="" /></Link>
                            </div>
                            <div className="dz-info">
                                <h4 className="title"><Link href="/blog-details">{item.name}</Link></h4>
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-date"> 7 March, 2024 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>
            <div className="widget widget widget_categories">
                <div className="widget-title">
                    <h5 className="title">Archives</h5>
                    <div className="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <ul>
                    {monthName.map((item, i)=>(
                        <li key={i}><Link href="#" scroll = {false}>{item.name}</Link>({item.number})</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BlogSidebar;
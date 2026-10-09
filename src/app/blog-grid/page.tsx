"use client";

import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Mainlayout from "@/component/Mainlayout";
import IMAGES from "@/component/theme";
import Pagebanner from "@/element/Pagebanner";
import { blogPosts, getBlogImage } from "@/data/blogs";

const BlogGrid = () => (
  <Mainlayout>
    <div className="page-content bg-white">
      <div
        className="dz-bnr-inr style-1 overlay-white-dark"
        style={{ backgroundImage: `url(${IMAGES.BanerImg3.src})` }}
      >
        <Pagebanner maintitle="OUR BLOG" currenttitle="Our Blog" parent="Home" />
      </div>
      <div className="content-inner">
        <div className="container">
          <div className="row section-head-bx align-items-center">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">
                  TELECOM <span className="text-primary">INSIGHTS</span>
                </h2>
                <p>
                  Practical perspectives on VoIP, business communications, and
                  building reliable connections.
                </p>
              </div>
            </div>
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
            <Masonry gutter="30px">
              {blogPosts.map((post) => {
                const image = getBlogImage(post.image);

                return (
                  <article className="card-container" key={post.slug}>
                    <div className="dz-card blog-grid style-1 aos-item">
                      {image && (
                        <div className="dz-media">
                          <Link href={`/blog/${post.slug}`}>
                            <Image src={image} alt={post.title} />
                          </Link>
                        </div>
                      )}
                      <div className="dz-info">
                        <div className="dz-meta">
                          <ul>
                            <li className="post-date">{post.category}</li>
                            <li className="post-user">By {post.author}</li>
                          </ul>
                        </div>
                        <h3 className="dz-title">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <div className="dz-post-text text">
                          <p>{post.excerpt}</p>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={`Read ${post.title}`}
                          className="btn shadow-primary icon-btn btn-primary"
                        >
                          <i className="fas fa-caret-right" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  </Mainlayout>
);

export default BlogGrid;

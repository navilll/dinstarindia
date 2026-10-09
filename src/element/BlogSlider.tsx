"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogPosts, getBlogImage } from "@/data/blogs";

const BlogSlider = () => (
  <Swiper
    speed={1500}
    slidesPerView={3}
    spaceBetween={0}
    loop={blogPosts.length > 3}
    autoplay={{ delay: 2500 }}
    className="swiper-container blog-swiper"
    modules={[Autoplay]}
    breakpoints={{
      1280: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
      767: { slidesPerView: 1 },
      691: { slidesPerView: 2 },
      320: { slidesPerView: 1 },
    }}
  >
    {blogPosts.slice(0, 6).map((post) => {
      const image = getBlogImage(post.image);

      return (
        <SwiperSlide key={post.slug}>
          <motion.div
            className="dz-card blog-grid style-1"
            initial={{ opacity: 0, y: "15%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1 }}
          >
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
              <h5 className="dz-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h5>
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
          </motion.div>
        </SwiperSlide>
      );
    })}
  </Swiper>
);

export default BlogSlider;

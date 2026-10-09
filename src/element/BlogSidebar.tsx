import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogImage } from "@/data/blogs";

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
const recentPosts = blogPosts.slice(0, 4);

const BlogSidebar = () => (
  <>
    <div className="widget widget_categories">
      <div className="widget-title">
        <h5 className="title">Categories</h5>
        <div className="dz-separator style-1 text-primary mb-0" />
      </div>
      <ul>
        {categories.map((category) => (
          <li className="cat-item" key={category}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="widget recent-posts-entry">
      <div className="widget-title">
        <h5 className="title">Recent Posts</h5>
        <div className="dz-separator style-1 text-primary mb-0" />
      </div>
      <div className="widget-post-bx">
        {recentPosts.map((post) => {
          const image = getBlogImage(post.image);

          return (
            <div className="widget-post clearfix" key={post.slug}>
              {image && (
                <div className="dz-media">
                  <Link href={`/blog/${post.slug}`}>
                    <Image src={image} alt={post.title} />
                  </Link>
                </div>
              )}
              <div className="dz-info">
                <h4 className="title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
                <div className="dz-meta">
                  <ul>
                    <li className="post-date">{post.category}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
);

export default BlogSidebar;

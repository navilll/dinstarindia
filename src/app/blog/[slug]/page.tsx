import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Mainlayout from "@/component/Mainlayout";
import IMAGES from "@/component/theme";
import BlogSidebar from "@/element/BlogSidebar";
import Pagebanner from "@/element/Pagebanner";
import {
  blogPosts,
  getBlogArticleSections,
  getBlogGuidance,
  getBlogImage,
} from "@/data/blogs";

interface BlogDetailsProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = getBlogImage(post.image);
  const articleSections = getBlogArticleSections(post.title, post.category);
  const guidance = getBlogGuidance(post.category);
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .concat(blogPosts.filter((item) => item.slug !== post.slug && item.category !== post.category))
    .slice(0, 2);

  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <div
          className="dz-bnr-inr style-1 overlay-white-dark"
          style={{ backgroundImage: `url(${IMAGES.BanerImg8.src})` }}
        >
          <Pagebanner
            maintitle="TELECOM INSIGHTS"
            parent="Blog"
            currenttitle={post.title}
          />
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
                <article className="dz-card blog-single style-1">
                  {image && (
                    <div className="dz-media">
                      <Image src={image} alt={post.title} priority />
                    </div>
                  )}
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-date">{post.category}</li>
                        <li className="post-user">By {post.author}</li>
                      </ul>
                    </div>
                    <h1 className="dz-title">{post.title}</h1>
                    <div className="dz-post-text">
                      <p>{post.content}</p>
                      {articleSections.map((section) => (
                        <section key={section.heading}>
                          <h2>{section.heading}</h2>
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </section>
                      ))}
                      <h2>{guidance.title}</h2>
                      <p>
                        A successful communication deployment depends on matching
                        the technology to real-world call flows, existing systems,
                        and the people who support them. Use these points as a
                        starting checklist:
                      </p>
                      <ul>
                        {guidance.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <p>
                        Test the proposed setup with representative traffic and
                        document the final configuration before rollout. A staged
                        deployment makes it easier to confirm call quality,
                        interoperability, and recovery procedures while keeping
                        existing services available.
                      </p>
                    </div>
                    <div className="dz-share-post">
                      <h5 className="title">EXPLORE MORE</h5>
                      <Link href="/blog-grid" className="btn shadow-primary btn-primary">
                        ALL INSIGHTS <i className="m-l10 fas fa-caret-right" />
                      </Link>
                    </div>
                  </div>
                </article>
                <div className="row extra-blog style-1">
                  <div className="col-lg-12">
                    <div className="widget-title">
                      <h2 className="title">Related Blogs</h2>
                      <div className="dz-separator style-1 text-primary mb-0" />
                    </div>
                  </div>
                  {relatedPosts.map((relatedPost) => {
                    const relatedImage = getBlogImage(relatedPost.image);

                    return (
                      <div className="col-md-6" key={relatedPost.slug}>
                        <article className="dz-card blog-grid style-1 m-b30">
                          {relatedImage && (
                            <div className="dz-media">
                              <Link href={`/blog/${relatedPost.slug}`}>
                                <Image src={relatedImage} alt={relatedPost.title} />
                              </Link>
                            </div>
                          )}
                          <div className="dz-info">
                            <div className="dz-meta">
                              <ul>
                                <li className="post-date">{relatedPost.category}</li>
                              </ul>
                            </div>
                            <h3 className="dz-title">
                              <Link href={`/blog/${relatedPost.slug}`}>
                                {relatedPost.title}
                              </Link>
                            </h3>
                            <p>{relatedPost.excerpt}</p>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

import { redirect } from "next/navigation";
import { blogPosts } from "@/data/blogs";

export default function BlogDetailsRedirect() {
  redirect(`/blog/${blogPosts[0].slug}`);
}

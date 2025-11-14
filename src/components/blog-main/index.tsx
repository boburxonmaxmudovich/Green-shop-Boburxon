import BlogCart from "./blog-cart"
import BlogDashboard from "./blog-dashboard"

const BlogMain = () => {
  return (
    <div className="w-[90%]">
        <BlogDashboard/>
        <BlogCart/>
    </div>
  )
}

export default BlogMain
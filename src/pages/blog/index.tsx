import BlogMain from '../../components/blog-main/index';
import Header from '../../components/header/index';

const Blog = () => {
  return (
    <div className='m-auto'>
      <Header/>
      <div className='w-[90%] m-auto'>
        <BlogMain/>
      </div>
    </div>
  )
}

export default Blog
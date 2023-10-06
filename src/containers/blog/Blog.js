import { Article } from '../../component'
import './blog.css'
import blog0 from '../../assets/blog0.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'

const Blog = () => {

  const component = {
    date:"Jun 12, 2023",
    title:"GPT-3 and Open AI is the future.let us explore how it is?"
  }

  return (
    <div className='gpt_blog sec-padding' id='blog'>
      <div className="gpt_blog-head">
        <h1 className='gradient_text'>A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className="gpt_blog-contain">
        <div className="gpt_blog-groupA"> 
          <Article imgUrl={blog0} date={component.date} title={component.title} />
        </div>
        <div className="gpt_blog-groupB"> 
          <Article imgUrl={blog1} date={component.date} title={component.title} />
          <Article imgUrl={blog2} date={component.date} title={component.title} />
          <Article imgUrl={blog3} date={component.date} title={component.title}/>
          <Article imgUrl={blog4} date={component.date} title={component.title} />
        </div>
      </div>
    </div>
  )
}
export default Blog
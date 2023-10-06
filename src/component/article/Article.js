import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt_blog-article'>
      <div className="gpt_blog-article-img">
        <img src={imgUrl} alt="blog-img" />
      </div>
      <div className="gpt_blog-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
export default Article
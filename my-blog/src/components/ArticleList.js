import {Link} from 'react-router-dom'

export const ArticleList = ({articles}) =>{
  return(
    <>
      {articles.map(article => (
        <Link key={article.name} to={`/articles/${article.name}`} className='article-list'>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)} ...</p>
        </Link>
      ))}
    </>

  )
}
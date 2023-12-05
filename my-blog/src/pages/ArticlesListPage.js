import articles from './article-content'
import { ArticleList } from '../components/ArticleList'

export const ArticlesListPage = () =>{
  return(
    <div className='main-list'>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>

    </div>
  )
}
import { useParams } from "react-router-dom"
import articles from './article-content'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { NotFoundPage } from "./NotFoundPage"
import { CommentList } from "../components/CommentList"
import { AddComment } from "../components/AddComment"
import { useUser } from "../hooks/useUser"
import {Link} from 'react-router-dom'

export const ArticlePage = () =>{
  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: [], canUpvote: false});
  const {canUpvote} = articleInfo;
  const { articleId } = useParams();
  
  const {user, isLoading} = useUser();
  useEffect(()=>{
    const loadArticleInfo = async () =>{
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/articles/${articleId}`, {headers
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    if(!isLoading){
      loadArticleInfo();
    }
    
  }, [isLoading, user, articleId]);

  const article = articles.find(article => article.name === articleId)
  const addUpvote =  async () =>{
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`, null,  {headers});
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle)
  }

  if(!article){
    return <NotFoundPage/>
  }
  return(
    <div className="content">
      <h1>{article.title}</h1>
      <div className="upvote">
        {user ? <button className="btn-upvote" onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button> : <Link className="login-button" to="/login">Log in to upvote</Link>}
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      
      {
        article.content.map((paragraph, i) => (
          <p key={i} className="content-p">{paragraph}</p>
        ))
      }
      {user ? <AddComment 
        articleName={articleId}
        onArticleUpdated={updatedComment => setArticleInfo(updatedComment)}
      /> 
      : <Link className="login-to-comment" to="/login">Log in to add a comment</Link>
      }
      
      <CommentList comments={articleInfo.comments}/>
    </div>
  )
}
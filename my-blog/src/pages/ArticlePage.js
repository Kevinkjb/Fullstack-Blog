import { useParams } from "react-router-dom"
import articles from './article-content'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { NotFoundPage } from "./NotFoundPage"
import { CommentList } from "../components/CommentList"
import { AddComment } from "../components/AddComment"
import { useUser } from "../hooks/useUser"

export const ArticlePage = () =>{
  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

  const { articleId } = useParams();
  const {user, isLoading} = useUser();
  useEffect(()=>{
    const loadArticleInfo = async () =>{
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    loadArticleInfo();
  }, []);

  const article = articles.find(article => article.name === articleId)
  const addUpvote =  async () =>{
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
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
        {user ? <button className="btn-upvote" onClick={addUpvote}>Upvote</button> : <button>Log in to upvote</button>}
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
      : <button>Log in to add a comment</button>
      }
      
      <CommentList comments={articleInfo.comments}/>
    </div>
  )
}
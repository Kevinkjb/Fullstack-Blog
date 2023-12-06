import {useState}  from 'react';
import axios from 'axios';
import { useUser } from '../hooks/useUser';

export const AddComment = ({articleName, onArticleUpdated}) =>{
    const [name, setName] = useState('')
    const [commentText, setcommentText] = useState('')
    const {user} = useUser();
    const addComment =  async () =>{
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText
        }, {headers});
        const updateComment = response.data;
        onArticleUpdated(updateComment)
        setName('')
        setcommentText('')
      }
    return(
        <div className='form'>
            <h3>Add a Comment</h3>
            <div className='form-input'>
                {user && <p>You are posting as {user.email}</p>}
                <label className='text-comment'>
                    Comment:
                </label>
                <textarea 
                    className='text-area'
                    value={commentText}
                    onChange={e => setcommentText(e.target.value)}/>
                <button className='add-comment-btn' onClick={addComment}>Add Comment</button>
            </div>
            
        </div>
    )
}
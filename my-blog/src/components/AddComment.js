import {useState}  from 'react'
import axios from 'axios'

export const AddComment = ({articleName, onArticleUpdated}) =>{
    const [name, setName] = useState('')
    const [commentText, setcommentText] = useState('')
    const addComment =  async () =>{
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText
        });
        const updateComment = response.data;
        onArticleUpdated(updateComment)
        setName('')
        setcommentText('')
      }
    return(
        <div className='form'>
            <h3>Add a Comment</h3>
            <div className='form-input'>
                <label className='name'>
                    Name: 
                </label>
                <input 
                    className='name-input'
                    value={name}
                    type='text' 
                    onChange={e => setName(e.target.value)}/>
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
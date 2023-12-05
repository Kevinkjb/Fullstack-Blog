export const CommentList = ({comments}) =>{
    return(
        <div className="comments-content">
        <h3>Comments:</h3>
        {comments.map(comment =>(
        <div className="comment" key={comment.postedBy + ': ' + comment.text}>
            <h4 className="postedBy">{comment.postedBy.charAt(0).toUpperCase() + comment.postedBy.slice(1)}</h4>
            <p className="comments-text">{comment.text}</p>
        </div>
    ))}
    </div>
    )

} 
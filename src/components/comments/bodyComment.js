const BodyComment = (props) => {

  return (
    <div className="comment__body">
      <p className="comment__review">{props.data.body}</p>
      <div className="comment_btns">
        <button className="comment__btn comment__btn_like">{props.data.likes}</button>
        <button className="comment__btn comment__btn_dislike">{props.data.dislikes}</button>
      </div>
    </div>
  )
}

export default BodyComment; 

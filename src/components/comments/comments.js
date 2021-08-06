import HeaderComment from "./headerComment";

const Comments = (props) => {

  return (
    <section className="comment">
      {
        props.data.reviews.map((el) => {
          return (
            <div key={el.id} className="comment__item">
              <HeaderComment data={el} countStars={props.countStars}/>
              <p className="comment__review">{el.body}</p>
              <div className="comment_btns">
                <button className="comment__btn comment__btn_like"></button>
                <button className="comment__btn comment__btn_dislike"></button>
              </div>
            </div>
          );
        })
      }
    </section>
  )
}

export default Comments;

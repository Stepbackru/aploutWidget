import HeaderComment from "./headerComment";

const Comments = (props) => {

  return (
    <section className="comment">
      {
        props.data.reviews.map((el, ind) => {
          return (
            <div className="comment__item">
              <HeaderComment data={el} countStars={props.countStars}/>
              <p className="comment__review">{el.body}</p>
            </div>
          );
        })
      }
    </section>
  )
}

export default Comments;

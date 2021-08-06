import HeaderComment from "./headerComment";

const Comments = (props) => {

  return (
    <section className="comment">
      {
        props.data.reviews.map((el, ind) => {
          return (
            <div className="comment__item">
              <HeaderComment data={el} countStars={props.countStars}/>
            </div>
          );
        })
      }
    </section>
  )
}

export default Comments;

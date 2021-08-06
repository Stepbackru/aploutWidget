import HeaderComment from "./headerComment";
import BodyComment from "./bodyComment";

const Comments = (props) => {

  return (
    <section className="comment">
      {
        props.data.reviews.map((el) => {
          return (
            <div key={el.id} className="comment__item">
              <HeaderComment data={el} countStars={props.countStars}/>
              <BodyComment data={el}/>
            </div>
          );
        })
      }
      
    </section>
  )
}

export default Comments;

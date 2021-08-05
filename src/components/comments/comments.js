const Comments = (props) => {

  return (
    <section className="comment">
      {
        props.reviews.map((el, ind) => {
          return (
            <div className="comment__item">
              
            </div>
          );
        })
      }
    </section>
  )
}

export default Comments;

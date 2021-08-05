import RatingStars from '../ratingStars';


const HeaderComment = (props) => {

  return (
    <header className="comment__header">
      <div className="author">
        <p className="author__name">{props.data.author.name}</p>
        <RatingStars rating={props.data.author.rating} countStars={props.countStars}/>
        <p className="author__detail">
          {`Срок использования: ${props.data.author.details[1].value}`}
        </p>
      </div>
      <p className="comment__date">${props.data.created_at}</p>
    </header>
  )
}

export default HeaderComment; 

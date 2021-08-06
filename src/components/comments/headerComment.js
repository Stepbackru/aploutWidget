import RatingStars from '../ratingStars';


const HeaderComment = (props) => {
  let timeUsage = null;
  
  if (props.data.author.details) {
    timeUsage = props.data.author.details
      .find((el) => el.label === 'Срок использования');
  }

  return (
    <header className="comment__header">
      <div className="author">
        <p className="author__name">{props.data.author.name}</p>
        <RatingStars rating={props.data.author.rating} countStars={props.countStars}/>
        <p className="author__detail">
          {timeUsage ? `${timeUsage.label}: ${timeUsage.value}` : null}
        </p>
      </div>
      <p className="comment__date">${props.data.created_at}</p>
    </header>
  )
}

export default HeaderComment; 

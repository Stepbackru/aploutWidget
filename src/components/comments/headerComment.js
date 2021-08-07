import RatingStars from '../ratingStars/ratingStars';


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
        <div className="author__name-detail">
          <RatingStars rating={props.data.rating} countStars={props.countStars}/>
          <p className="author__detail">
            {timeUsage ? `${timeUsage.label}: ${timeUsage.value}` : null}
          </p>
        </div>
      </div>
      <p className="comment__date">${props.data.created_at}</p>
    </header>
  )
}

export default HeaderComment; 

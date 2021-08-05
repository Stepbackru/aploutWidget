import RatingStars from './ratingStars';

const RatingProduct = (props) => {

  return (
  <div className="rating">
    <span className="rating__value">{props.rating}</span>
    <RatingStars rating={props.rating} countStars={props.countStars}/>
  </div>);
}

export default RatingProduct;

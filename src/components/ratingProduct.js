import RatingStars from './ratingStars';

const RatingProduct = (props) => {

  return (
  <div className="rating">
    <span className="rating__value">{props.data.product.rating}</span>
    <RatingStars rating={props.data.product.rating} countStars={props.countStars}/>
    <p className="recommends">На основе
      <span className="recommends__count"> {props.data.product.reviews_count} оценок</span>
    </p>
  </div>);
}

export default RatingProduct;

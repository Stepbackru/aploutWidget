import './style.css'

const RatingStars = (props) => {
  const stars = Array(props.countStars).fill(0);
  const count = Math.ceil(props.rating);

  return (
  <div className="rating">
    <div className="stars">
      {stars.map((_, ind) => {
        const isStarOn = ind < count ? 'stars__item_on' : 'stars__item_off';

        if (ind + 1 === count && !Number.isInteger(props.rating)) {
          return <div key={ind} className={`stars__item stars__item_half`}></div>
        } else {
          return <div key={ind} className={`stars__item ${isStarOn}`}></div>
        }

      })}
    </div>
  </div>);
}

export default RatingStars;

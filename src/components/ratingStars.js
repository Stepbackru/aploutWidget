const RatingStars = (props) => {
  const stars = Array(props.countStars).fill(0);
  const count = Math.ceil(props.rating);

  return (
  <div className="rating">
    <div className="stars">
      {stars.map((_, ind) => {
        const isStarOn = ind < count ? 'stars__item_on' : '';

        if (ind + 1 === count && !Number.isInteger(props.rating)) {
          return <div key={ind} className={`stars__item stars__item-half`}></div>
        } else {
          return <div key={ind} className={`stars__item ${isStarOn}`}></div>
        }

      })}
    </div>
  </div>);
}

export default RatingStars;

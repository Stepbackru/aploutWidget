const PhotoProduct = (props) => {

  return (
  <section className="photo">
    <ul className="slider">
      {
        props.data.product.picture_urls.map((el, ind) => {
          return (
            <li key={ind} className="slider__item">
              <img className="slider__image" src={el} alt={props.data.product.name} />
            </li>
          );
        })
      }
    </ul>
  </section>);
}

export default PhotoProduct;

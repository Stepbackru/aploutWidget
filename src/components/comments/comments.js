import React, { Component } from 'react';
import HeaderComment from "./headerComment";
import BodyComment from "./bodyComment";

class Comments extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments: props.data.reviews,
    }
  }

  render() {
    return (
      <section className="comment">
        {
          this.state.comments.map((el) => {
            return (
              <div key={el.id} className="comment__item">
                <HeaderComment data={el} countStars={this.props.countStars}/>
                <BodyComment data={el}/>
              </div>
            );
          })
        }
        <button className="comment__more">Загрузить еще</button>
      </section>
    )
  }
}

export default Comments;

import React, { Component } from 'react';
import HeaderComment from "./headerComment";
import BodyComment from "./bodyComment";

class Comments extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    this.loadCommentMore = this.loadCommentMore.bind(this);
  }

  loadCommentMore(e) {
    e.preventDefault();
    this.props.loadComments('isClicked');
  }

  render() {
    return (
      <section className="comment">
        {
          this.props.data.reviews.map((el) => {
            return (
              <div key={el.id} className="comment__item">
                <HeaderComment data={el} countStars={this.props.countStars}/>
                <BodyComment data={el}/>
              </div>
            );
          })
        }
        <button className="comment__more" onClick={this.loadCommentMore}>Загрузить еще</button>
      </section>
    )
  }
}

export default Comments;

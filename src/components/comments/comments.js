import React, { Component } from 'react';
import './style.css';
import './media.css';
import HeaderComment from "./headerComment";
import BodyComment from "./bodyComment";

class Comments extends Component{
  constructor(props) {
    super(props);
    this.state = {
      setNewKey: false,
      currentPage: 1,
      perPage: this.props.data.meta.per_page,
    }

    this.loadCommentMore = this.loadCommentMore.bind(this);
  }

  loadCommentMore(e) {
    e.preventDefault();
    this.props.loadComments('isClicked');
    this.setState({
      setNewKey: true,
      currentPage: this.state.currentPage + 1,
      perPage: this.state.perPage + this.props.data.meta.per_page,
    });
  }

  render() {
    return (
      <section className="comment">
        {
          this.props.sortReviews ?
          this.props.sortReviews.slice(0,this.state.perPage).map((el, ind) => {
            return (
              <div key={!this.state.setNewKey ? el.id : el.id+ind.toString()} className="comment__item">
                <HeaderComment data={el} countStars={this.props.countStars}/>
                <BodyComment data={el}/>
              </div>
            );
          }) :
          this.props.reviews.slice(0,this.state.perPage).map((el, ind) => {
            return (
              <div key={!this.state.setNewKey ? el.id : el.id+ind.toString()} className="comment__item">
                <HeaderComment data={el} countStars={this.props.countStars}/>
                <BodyComment data={el}/>
              </div>
            );
          })
        }
        {
          this.state.currentPage < this.props.data.meta.total_pages ?
          <button className="comment__more" onClick={this.loadCommentMore}>Загрузить еще</button> :
          null
        }
        
      </section>
    )
  }
}

export default Comments;

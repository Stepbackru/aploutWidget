import React, { Component } from 'react';
import './style.css';
import './media.css';

class FilterComments extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      allReviews: [],
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.getAllReviewsFromApi = this.getAllReviewsFromApi.bind(this);
  }

  handleChange(e) {
    this.setState({selected: e.target.value});
    const reviews = [...this.state.allReviews];
    let sortReviews = [];

    if (e.target.value === 'new') {
      sortReviews = reviews.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
      })
    } else {
      sortReviews = reviews.sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    })
    }

    this.props.sortReviews(sortReviews);
  }

  async getAllReviewsFromApi() {
    for(let i = 1; i < this.props.data.meta.total_pages; i++) {
      const url = `https://w-api2.aplaut.io/widgets/v2/render.json?authentication_token=56fa337b8ddf870c76021a5f&context=product&context_id=10350209&theme_id=default&widget_id=product-reviews&page=${i}`;
      const res = await fetch(url);
      let dataJSON = {};
  
      if (res.ok) {
        dataJSON = await res.json();
      }
      
      this.setState({
        allReviews: [...this.state.allReviews, ...dataJSON.reviews],
      })
    }    
  }

  componentDidMount() {
    this.getAllReviewsFromApi();
  }

  render() {
    return (
    <div className="filter-comments">
      <p className="filter-comments__title">Сортировать:</p>
      <select className="filter-comments__choice" 
        value={this.state.selected}
        onChange={this.handleChange}>
        <option value="new">Сначала новые</option>
        <option value="old">Сначала старые</option>
      </select>
    </div>);
  }
}

export default FilterComments;

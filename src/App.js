import React, { Component } from 'react';
import RatingProduct from './components/ratingProduct';
import PhotoProduct from './components/photoProduct';
import FilterComments from './components/filterComments';
import Comments from './components/comments/comments'

class App extends Component{
  constructor(props){
    super(props);
    this.countStars = 5;
    this.state = {
      data: null,
      totalPage: null,
      currentPage: 1,
    }
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.addMoreComments = this.addMoreComments.bind(this);
  }

  async getDataFromApi() {
    const url = `https://w-api2.aplaut.io/widgets/v2/render.json?authentication_token=56fa337b8ddf870c76021a5f&context=product&context_id=10350209&theme_id=default&widget_id=product-reviews&page=${this.state.currentPage}`;
    const res = await fetch(url);
    let dataJSON = {};

    if (res.ok) {
      dataJSON = await res.json();
    }
    
    this.setState({
      data: dataJSON,
      totalPage: dataJSON.meta.total_pages
    })
  }

  addMoreComments(click) {
    const expressionNextPage = this.state.currentPage < this.state.totalPage ? 
      this.state.currentPage + 1 : this.state.currentPage;
    
    if (click) {
      console.log(this.state.totalPage)
      this.setState({ 
        currentPage: expressionNextPage, 
      });
    }
  }

  componentDidMount(){
    this.getDataFromApi();
  }

  componentDidUpdate(){
    this.getDataFromApi();
  }

  render() {
    return (
    <section className="widget">
      <header className="widget__header">
      {this.state.data && 
        <RatingProduct data={this.state.data}
          countStars={this.countStars}/>
      }
      <button className="widget__write">Написать отзыв</button>
      </header>
      {this.state.data && <PhotoProduct data={this.state.data}/>}
      {this.state.data && <FilterComments />}
      {this.state.data && 
        <Comments 
          data={this.state.data} 
          countStars={this.countStars}
          loadComments={this.addMoreComments}/>}
    </section>)    
  }
}
export default App;

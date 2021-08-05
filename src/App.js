import React, { Component } from 'react';
import RatingProduct from './components/ratingProduct';
class App extends Component{
  constructor(props){
    super(props);
    this.countStars = 5;
    this.state = {
      data: null,
    }
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  async getDataFromApi() {
    const url = `https://w-api2.aplaut.io/widgets/v2/render.json?authentication_token=56fa337b8ddf870c76021a5f&context=product&context_id=10350209&theme_id=default&widget_id=product-reviews`;
    const res = await fetch(url);
    let dataJSON = {};

    if (res.ok) {
      dataJSON = await res.json();
    }
    
    this.setState({
      data: dataJSON,
    })
  }

  componentDidMount(){
    this.getDataFromApi();
  }

  render() {
    return (
    <section className="widget">
      <header className="widget__header">
      {this.state.data && 
        <RatingProduct rating={this.state.data.product.rating}
          countStars={this.countStars}/>
      }
      </header>
    </section>)    
  }
}
export default App;

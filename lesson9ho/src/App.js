import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => this.props.dispatch({ type: 'UPDATE_IMAGES', images: res }))
      .catch(err => console.log('[ERROR]'))
  }


  render() {
    let images = <h1>loading...</h1>
    if (this.props.pics) {
      images = this.props.pics.map(pic => {
        while(pic.id <= 50) {
          return (
            <img src={pic.url} key={pic.id} style={{height: 100, width: 'auto'}} alt={pic.title} />
          )
        }
      });
    }
    return <div>{images}</div>
  }
}

const mapStateToProps = state => {
  return {
    pics: state.photos
  }
}

export default connect(mapStateToProps, null)(App);


// For this project, we are going to be using an API available with some fake data. Use the below API to list out the first 50 pictures in this data set onto your webpage.

// API = 'https://jsonplaceholder.typicode.com/photos'
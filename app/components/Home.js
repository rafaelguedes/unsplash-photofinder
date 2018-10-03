import React from 'react';
import Header from './header/Header';
import Results from './results/Results';
import { getPhotosByKeyword } from '../utils/api';

class Home extends React.Component {

  constructor() {
    super();
    this.state= {
      results: []
    }
  }


  queryForPhotos = async (query) => {
    if(query !== '') {
        const photos = await getPhotosByKeyword(query);
        this.setState(() => ({results: photos}));
    }
  }

  render() {
    return (
        <div className='container'>
            <Header query={this.queryForPhotos}/>
            <Results history={this.props.history} results={this.state.results}/>  
        </div>
    );
  }
}

export default Home;

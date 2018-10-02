import React from 'react';
import Header from './header/Header';
import Results from './results/Results';

class Home extends React.Component {

  constructor() {
    super();
    this.state= {
      results: []
    }
  }

  handleResults = (results) => {
    this.setState(() => ({results: results}));
  }

  render() {
    return (
        <div className='container'>
            <Header resultsCallback={this.handleResults}/>
            <Results history={this.props.history} results={this.state.results}/>  
        </div>
    );
  }
}

export default Home;

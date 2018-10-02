import React from 'react';
import Search from '../search/Search';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleResults = (results) => {
        this.props.resultsCallback(results);
    }

    render() {
        return (
            <div className='header'>
                <h2>UnsplashFinder</h2>
                <div className='search-container'>
                    <Search resultsCallback={this.handleResults}/>
                </div>
            </div> 
        );
    }
}

export default Header;

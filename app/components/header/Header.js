import React from 'react';
import Search from '../search/Search';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <h2>UnsplashFinder</h2>
                <div className='search-container'>
                    <Search query={this.props.query}/>
                </div>
            </div> 
        );
    }
}

export default Header;

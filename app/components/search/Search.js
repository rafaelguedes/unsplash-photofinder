import React from 'react';
import Button from './Button';
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            term: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState(() => ({term: value}));
    }

    render() {
        return (
            <div className='search'>
                <input 
                    type='text' 
                    placeholder='Please, search an image'
                    value={this.state.term}
                    onChange={this.handleChange}/>
                <Button onClick={() => this.props.query(this.state.term)}/>
            </div> 
        );
    }
}

export default Search;

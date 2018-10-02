import React from 'react';
import Button from './Button';
import './search.css';
import { getPhotosByKeyword } from '../../utils/api';

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
    
    queryForPhotos = async (query) => {
        if(query !== '') {
            const photos = await getPhotosByKeyword(query);
            this.setState(() => ({results: photos}));
            this.props.resultsCallback(this.state.results);
        }
    }

    render() {
        return (
            <div className='search'>
                <input 
                    type='text' 
                    placeholder='Please, search an image'
                    value={this.state.term}
                    onChange={this.handleChange}/>
                <Button onClick={() => this.queryForPhotos(this.state.term)}/>
            </div> 
        );
    }
}

export default Search;

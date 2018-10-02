import React from 'react';
import './results.css'
import Placeholder from './Placeholder';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        this.props.history.push({
            pathname: '/detail/' + id,
        });
    }

    render() {
        return (
            <div className='results'>
                {this.props.results.results ? 
                    this.props.results.results.map((photo, index) => (
                    <figure key={photo.id} onClick={() => this.handleClick(photo.id)} className={`results-items results-item-${index + 1}`}>
                        <img src={photo.urls.regular} alt={photo.description}/>
                    </figure>
                ))
                :<Placeholder />}
            </div> 
        );
    }
}

export default Results;

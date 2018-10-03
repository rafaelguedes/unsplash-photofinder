import React from 'react';
import './detail.css'

export default function Detail({ location }) {
        return (
            <div className='detail-container'>
                <figure>
                    <a href={location.state.links.html} target='_blank'>
                        <img src={location.state.urls.small} alt={location.state.description}></img>
                    </a>
                    <figcaption>{location.state.description}</figcaption>
                </figure>
            </div>
        );
}

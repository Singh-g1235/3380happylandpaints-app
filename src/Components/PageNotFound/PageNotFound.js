import React from 'react'
import {Link} from 'react-router-dom';
function PageNotFound() {
    return (
        <div className="container">
            <h1>404</h1>
            <h2>The Page You are looking for does not exists</h2>
            <Link to='/'><button className="btn-success btn">Home</button></Link>
        </div>
    )
}

export default PageNotFound

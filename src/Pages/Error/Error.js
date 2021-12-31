import React from 'react';
import { Link } from 'react-router-dom';
import notFound from'../../Images/404.png'
import "./Error.css"

const Error = () => {
    return (
        <div className="notFound">
            <img src={notFound}></img>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Error;
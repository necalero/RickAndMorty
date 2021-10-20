import React from 'react';

const Card = (url, name, gender, status) => {
    return (
        <div className="card" style={{width: `12rem`}}>
            <img src={url} class="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{name}</h5>
            <p className ="card-text">Gender: {gender}</p>
            <p className ="card-text">Status: {status}</p>
            <a href="/#" className ="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;
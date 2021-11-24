import React from "react";

import './card.styles.css';

export const Card = (props) => {
    const { monster } = props;
    const { id, name, email } = monster;

    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}set=set2&size=50x50`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}
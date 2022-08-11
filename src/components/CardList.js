import React from 'react';
import Card from './Card';

// CardList Component, takes in robots array as a prop
const CardList = ({ robots }) => {
    return (
        <div>
            {
                // Everything in these curly brackets is a JS expression.
                // Create a mapped array and return a <Card> for each item.
                robots.map((user, i) => {
                    return <Card
                        id={ i }
                        key={ robots[i].id }
                        name={ robots[i].name }
                        email={ robots[i].email } />;
                })
            }
        </div>
    );
};

export default CardList;

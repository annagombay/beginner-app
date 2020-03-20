import React from 'react';

import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
    return (
        <div>
            <h1>
                Hope it is tasty
            </h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
            <Burger ingredients= {props.ingredients}/>
            </div>
        </div>
    );
}

export default checkoutSummary; 
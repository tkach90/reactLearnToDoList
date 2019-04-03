import React, { Fragment } from 'react';

function Conditional(props) {
    return (
        <Fragment>
            {props.isLoading ?
                <h1>Loading...</h1> :
                <h1>Some important info</h1>
            }
        </Fragment>
    )

}

export default Conditional;
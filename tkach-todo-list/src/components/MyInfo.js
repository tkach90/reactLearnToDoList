import React, {Fragment} from 'react';
import styled from 'styled-components';


const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    
    
`;

function MyInfo(){
    return (
        <Fragment>
            <Info>
                <div className="wrap">
                    <input type="checkbox"/><label>should do</label>
                </div>
                <div className="wrap">
                    <input type="checkbox"/><label>done</label>
                </div>
                <div className="wrap">
                    <input type="checkbox"/><label>not done</label>
                </div>
                <div className="wrap">
                    <input type="checkbox"/><label>should do in near future</label>
                </div>
            </Info>
        </Fragment>
    )
}

export default MyInfo;
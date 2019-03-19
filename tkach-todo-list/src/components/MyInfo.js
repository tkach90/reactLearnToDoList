import React, {Fragment} from 'react';
import styled from 'styled-components';


const TodoItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

function MyInfo(props){
    return (
            <TodoItem>
                    <input type="checkbox"/><label>{props.name}</label>
            </TodoItem>
    )
}

export default MyInfo;
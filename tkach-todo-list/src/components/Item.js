import React from 'react';
import styled from 'styled-components';


const TodoItem = styled.div`
    display: flex;
    align-items: baseline;
    margin: 1rem;
    padding: 1rem;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
`;

// function handleClickItem() {
//     return (console.log('Clicked!'));
// }

function Item(props){
    return (
            <TodoItem>
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
            </TodoItem>
    )
}

export default Item;
import React, {Fragment} from 'react';

import styled from 'styled-components';

const NavbarComponent = styled.header`
    
    h1 {
      font-size: 2rem;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        background: blue;
        color: floralwhite;
        
        li {
            list-style: none;
        }
    }
`;

function Navbar() {
    return(
        <Fragment>
            <NavbarComponent>
                <h1>To Do List</h1>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </NavbarComponent>
        </Fragment>
    )
};

export default Navbar;
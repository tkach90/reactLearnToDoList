import React, {Fragment} from 'react';

import styled from 'styled-components';

const FooterComponent = styled.footer`
    ul {
        display: flex;
        flex-direction: column;
        background: light-blue;
        
        li {
            list-style: none;
        }
    }
`;

function Footer() {
    return(
        <Fragment>
            <FooterComponent>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </FooterComponent>
        </Fragment>
    )
};

export default Footer;
import React from 'react';
import styled from 'styled-components';

const Memas = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  background: cornflowerblue;
  
  img {
    width: 4rem;
    height: 4rem;
  }
`;

function Header() {
    return (
        <Memas>
            <img
                src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
                alt='Problem?'
            />
            <p>Meme Generator</p>
        </Memas>
    )
}

export default Header;
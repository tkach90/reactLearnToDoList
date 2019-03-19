import React from 'react';

import MyInfo from './MyInfo';

function MainContent(props) {
    return(
        <main>
            <MyInfo
                todo = {{name: 'should do'}}
            />
            <MyInfo/>
            <MyInfo/>
            <MyInfo/>
        </main>
    )
};

export default MainContent;
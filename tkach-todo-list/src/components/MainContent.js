import React from 'react';

import MyInfo from './MyInfo';

function MainContent(props) {

    return(
        <main>
            <MyInfo
                todo={{ name: 'should do', text: 'hello'}}
            />
            <MyInfo
                todo={{ name: 'done', text: 'hello'}}
            />
            <MyInfo
                todo={{ name: 'should be done', text: 'hello'}}
            />
            <MyInfo
                todo={{ name: 'failed', text: 'hello'}}
            />
        </main>
    )
};

export default MainContent;
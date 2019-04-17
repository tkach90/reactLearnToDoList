import React, {Fragment} from 'react';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
// import Footer from './components/Footer';


function App() {
    return(
        <Fragment>
            <Navbar/>
            <MainContent/>
            {/*<Footer/>*/}
        </Fragment>
    )
}

export default App;
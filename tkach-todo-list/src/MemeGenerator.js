import React, { Fragment, PureComponent } from 'react';

class MemeGenerator extends PureComponent {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    render() {
        return (
            <h1>Meme Generator Section</h1>
        )
    }
}

export default MemeGenerator;
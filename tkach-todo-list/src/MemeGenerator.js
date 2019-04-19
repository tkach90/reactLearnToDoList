import React, { Fragment, PureComponent } from 'react';

class MemeGenerator extends PureComponent {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
        }
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;

                this.setState({
                    allMemeImgs: memes
                });
            });
    }

    render() {
        return (
            <Fragment>
                <form className='meme-form'>

                </form>
            </Fragment>
        )
    }
}

export default MemeGenerator;
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Meme = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    color: red;

      h2:first-of-type {
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translate(-50%, -50%); 
      }
      h2:nth-of-type(2) {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%, -50%); 
      }
`;

class MemeGenerator extends PureComponent {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
        };
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

    handleChangeForm = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const randImg = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const generatedImg = this.state.allMemeImgs[randImg].url;

        this.setState({randomImage: generatedImg })


    }

    render() {
        return (
            <>
                <form
                    onSubmit={
                        this.handleSubmit
                }>
                    <input
                        type="text"
                        placeholder='Bottom text'
                        name='topText'
                        value={this.state.topText}
                        onChange={this.handleChangeForm}
                    />
                    <input
                        type="text"
                        placeholder='Top text'
                        name='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChangeForm}
                    />
                    <button
                        onClick={this.handleClickGenButton}
                    >
                        Generate
                    </button>
                </form>

                <Meme>
                    <img src={this.state.randomImage} alt="meme"/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </Meme>
            </>
        )
    }
}

export default MemeGenerator;
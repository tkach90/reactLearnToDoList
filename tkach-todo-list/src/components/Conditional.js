import React, { Fragment, PureComponent } from 'react';

class Conditional extends PureComponent{
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        const buttonText = this.state.loggedIn? 'Logged In' : 'Logged out';

        return (
            <Fragment>
                {this.props.isLoading ?
                    <h1>Loading...</h1> :
                    <h1>Some important info</h1>
                }
                <button onClick={this.handleClick}>
                    {buttonText}
                </button>
            </Fragment>
        )
    }
}

export default Conditional;
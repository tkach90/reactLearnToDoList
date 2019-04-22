import React, {PureComponent} from 'react';

import FormComponent from './FormComponent';

class Form extends PureComponent {
    constructor () {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleFormChange(event) {
        const { value, name, type, checked } = event.target;
        console.log(checked);
        type === 'checkbox' ?
            this.setState( {
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            });
    }

    handleSubmitForm() {

    }

    render() {
        return (
            <FormComponent
                handleFormChange={this.handleFormChange}
                {...this.state}
            />
        )
    }
};

export default Form;
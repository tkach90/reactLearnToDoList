import React, {PureComponent} from 'react';

import AddTodoItem from './AddTodoItem';

class AddTodoItemContainer extends PureComponent {
    constructor () {
        super();
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',

            }
        };
        this.handleFormAddItem = this.handleFormAddItem.bind(this);
    }

    handleFormAddItem(event) {
        console.log('hello add item');

    }

    addItem = e => {
        e.preventDefault();
        console.log('yes you added');
    }

    //inputElement = React.createRef();

    render() {
        return (
            <AddTodoItem
                addItem={this.addItem}

            />
        )
    }
};

export default AddTodoItemContainer;
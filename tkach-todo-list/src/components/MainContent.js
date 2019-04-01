import React, {Fragment, PureComponent} from 'react';

import Item from './Item';
import todoData from './ToDoData';

import StateChanging from './statetraining';

class MainContent extends PureComponent {
    constructor () {
        super();
        this.state = {
            todos: todoData,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       this.setState(prevState => {
           return {
               count: this.state.count + 1
           }
       })
    }

    render() {
        const itemComponents = this.state.todos.map(item => <Item key={item.id} item={item}/>);
        return(
            <Fragment>
                <main>
                    {itemComponents}
                    <Fragment>
                        <h1>{this.state.count}</h1>
                        <button
                            onClick={this.handleClick}
                        >
                            Change
                        </button>

                        <StateChanging/>
                    </Fragment>
                </main>
            </Fragment>
        )
    }
};

export default MainContent;
import React, {Fragment, PureComponent} from 'react';

import Item from './Item';
import todoData from './ToDoData';

// import StateChanging from './statetraining';
import Conditional from './Conditional';

class MainContent extends PureComponent {
    constructor () {
        super();
        this.state = {
            todos: todoData,
            isLoading: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    handleChange(id) {
        this.setState(prevState => {
                const updateState = prevState.todos.map(todo => {
                    if ( todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                });

                return {
                    todos: updateState
                }
            }
        );
    }

    render() {
        const itemComponents = this.state.todos.map(item =>
            <Item
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />);
        return(
            <Fragment>
                <main>
                    {itemComponents}

                    <Fragment>
                        {this.state.isLoading ?
                            <h1>Loading...</h1> :
                            <Conditional />
                        }
                    </Fragment>
                    {/*<Fragment>*/}
                        {/*<h1>{this.state.count}</h1>*/}
                        {/*<button*/}
                            {/*onClick={this.handleClick}*/}
                        {/*>*/}
                            {/*Change*/}
                        {/*</button>*/}

                        {/*<StateChanging/>*/}
                    {/*</Fragment>*/}
                </main>
            </Fragment>
        )
    }
};

export default MainContent;
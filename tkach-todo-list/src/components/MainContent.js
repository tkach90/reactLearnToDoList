import React, {Fragment, PureComponent} from 'react';

import Item from './Item';
import todoData from './ToDoData';
import FormContainer from './form/FormContainer';
// import StateChanging from './statetraining';
import Conditional from './Conditional';

class MainContent extends PureComponent {
    constructor () {
        super();
        this.state = {
            todos: todoData,
            isLoading: false,
            character: {
                name: 'Luke Skywalker',
                gender: 'male',
            },
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)

        fetch('https://swapi.co/api/planets/1/')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: true,
                })
            })
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

        const  text = this.state.loading ? this.state.character.name : 'loading...' ;

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
                    <Fragment>
                        {text}
                    </Fragment>

                    <FormContainer/>
                </main>
            </Fragment>
        )
    }
};

export default MainContent;
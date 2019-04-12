import React, {Fragment, PureComponent} from 'react';
import styled from 'styled-components';

import Item from './Item';
import todoData from './ToDoData';

// import StateChanging from './statetraining';
import Conditional from './Conditional';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 30vw;
    
    select {
        margin: 1rem 1rem 1rem 0;
    }
`


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
            firstName: '',
            lastName: '',
            gender: '',
            diet: ['vegetarian', 'kosher', 'lactose free']

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
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

    handleFormChange(event) {
        const { value, name, type, checked } = event.target;
        type === 'checkbox' ? this.setState( {[name]: checked}) : this.setState({[value]: checked});


        // let diet = this.state.diet;
        this.setState(prevState => {
                const updateState = prevState.this.state.diet.map(item => {
                        return {
                            diet: updateState
                        }
                    }
                )
            }
        )

    }

    handleSubmitForm() {

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

                    <Form>
                        <input
                            type="text"
                            value={this.state.firstName}
                            name='firstName'
                            placeholder='First Name'
                            onChange={this.handleFormChange}
                        />
                        <br/>
                        <input
                            type="text"
                            value={this.state.lastName}
                            name='lastName'
                            placeholder='Last Name'
                            onChange={this.handleFormChange}
                        />
                        <br/>
                        <input
                            type="number"
                            value={this.state.age}
                            name='age'
                            placeholder='Age'
                            onChange={this.handleFormChange}
                        />
                        <br/>
                        <label>
                            <input
                                type="radio"
                                value='male'
                                name='gender'
                                placeholder='Gender'
                                checked={this.state.gender === 'male'}
                                onChange={this.handleFormChange}
                            />
                            Male
                        </label>
                        <br/>
                        <label>
                            <input
                                type="radio"
                                value='female'
                                name='gender'
                                placeholder='Gender'
                                checked={this.state.gender === 'female'}
                                onChange={this.handleFormChange}
                            />
                            Female
                        </label>
                        <br/>
                        <label>
                            <select name="destination">
                                <option value="this.state.destination">Dubai</option>
                                <option value="this.state.destination">Amsterdam</option>
                                <option value="this.state.destination">Singapore</option>
                            </select>
                            Destination
                        </label>
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                                value={this.state.diet}
                                name='vegetarian'
                                placeholder='Diet'
                                checked={this.state.name === 'vegetarian'}
                                onChange={this.handleFormChange}
                            />
                            vegetarian
                        </label>
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                                value={this.state.diet}
                                name='kosher'
                                placeholder='Diet'
                                checked={this.state === 'kosher'}
                                onChange={this.handleFormChange}
                            />
                            kosher
                        </label>
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                                value={this.state.diet}
                                name='lactose free'
                                placeholder='Diet'
                                checked={this.state === 'lactose free'}
                                onChange={this.handleFormChange}
                            />
                            lactose free
                        </label>
                        <br/>
                        <button>Submit</button>
                    </Form>
                </main>
            </Fragment>
        )
    }
};

export default MainContent;
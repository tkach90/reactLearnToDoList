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
    
    label {
      margin-bottom: 1rem;
      
 
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
            age: '',
            gender: 'male',
            airlineDestination: '',
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
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
        type === 'checkbox' ?
            this.setState({
                [name]: checked
            })
            :
        this.setState({
            [name]: value
        })
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

                    <Form
                        onSubmit={this.handleSubmitForm}
                    >
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
                                checked={this.state === 'male'}
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
                                checked={this.state === 'female'}
                                onChange={this.handleFormChange}
                            />
                            Female
                        </label>
                        <br/>
                        <label>
                            <select
                                value={this.state.airlineDestination}
                                onChange={this.handleFormChange}
                                name="destination"
                            >
                                <option value="">--Choose your destionation--</option>
                                <option value="lisbon">Lisbon</option>
                                <option value="dnipro">Dnipro</option>
                                <option value="washington">Washington</option>
                            </select>
                            Destination
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='isVegan'
                                onChange={this.handleFormChange}
                                checked={this.state.isVegan}
                            />
                            Vegan
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='isKosher'
                                onChange={this.handleFormChange}
                                checked={this.state.isKosher}
                            />
                            Kosher
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='isLactoseFree'
                                onChange={this.handleFormChange}
                                checked={this.state.isLactoseFree}
                            />
                            LactoseFree
                        </label>
                        <button>Submit</button>
                    </Form>

                    <h2>Entered Info:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.airlineDestination}</p>
                    <p>Your diet:
                        Vegan: {this.state.isVegan? 'yes' : 'no'}<br/>
                        Kosher: {this.state.isKosher? 'yes' : 'no'}<br/>
                        LactoseFree: {this.state.isLactoseFree? 'yes' : 'no'}
                    </p>
                </main>
            </Fragment>
        )
    }
};

export default MainContent;
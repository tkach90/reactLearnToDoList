import React, {Fragment} from 'react';
import styled from "styled-components";

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 30vw;
    
    select {
        margin: 1rem 1rem 1rem 0;
    }
    
    button {
      margin: 0 auto;
      width: 6rem;
    }
`;

function FormComponent(props) {
    return (
        <Fragment>
            <FormWrap>
                <input
                    type="text"
                    value={props.firstName}
                    name='firstName'
                    placeholder='First Name'
                    onChange={props.handleFormChange}
                />
                <br/>
                <input
                    type="text"
                    value={props.lastName}
                    name='lastName'
                    placeholder='Last Name'
                    onChange={props.handleFormChange}
                />
                <br/>
                <input
                    type="number"
                    value={props.age}
                    name='age'
                    placeholder='Age'
                    onChange={props.handleFormChange}
                />
                <br/>
                <label>
                    <input
                        type="radio"
                        value='male'
                        name='gender'
                        placeholder='Gender'
                        checked={props.gender === 'male'}
                        onChange={props.handleFormChange}
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
                        checked={props.gender === 'female'}
                        onChange={props.handleFormChange}
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
                        value={props.isVegan}
                        name='vegetarian'
                        placeholder='Diet'
                        checked={props.isVegan === 'vegetarian'}
                        onChange={props.handleFormChange}
                    />
                    vegetarian
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        value={props.isKosher}
                        name='kosher'
                        placeholder='Diet'
                        checked={props.isKosher === 'kosher'}
                        onChange={props.handleFormChange}
                    />
                    kosher
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        value={props.isLactoseFree}
                        name='lactose free'
                        placeholder='Diet'
                        checked={props.isLactoseFree === 'lactose free'}
                        onChange={props.handleFormChange}
                    />
                    lactose free
                </label>
                <br/>
                <button>Submit</button>
            </FormWrap>
        </Fragment>
    )
}

export default FormComponent;
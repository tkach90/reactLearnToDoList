import React, { Fragment } from 'react';

function AddTodoItem(props) {
        return (
            <Fragment>
                <form>
                    <input
                        type='text'
                        placeholder="Add item"
                        value={props.currentItem}
                        onChange={props.handleFormAddItem}
                    />
                    <button
                        type="submit"
                        onSubmit={props.addItem}
                    >
                        Add Task
                    </button>
                </form>
            </Fragment>
        )
}
export default AddTodoItem;

import React, { Component } from "react";
import './AddToDoTaskForm.css'

export default class AddToDoTaskForm  extends Component{
    state = {
        inputValue: '',
    };

    onInputChange = (e) => {
        this.setState(() => {
            return {
                inputValue: e.target.value,
            }
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputValue.length !== 0) {
            this.props.onAdded(this.state.inputValue);
            this.setState({
                inputValue: '',
            });
        }
    };

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className='form-control add-task-wrapper '>
                <span className='add-task-input-wrapper'>
                    <input
                        onChange={this.onInputChange}
                        className="form-control add-task-input"
                        value={this.state.inputValue}
                        placeholder='What do you want to do?'
                        type="text"
                    />
                </span>
                <span className='add-task-button-wrapper'>
                    <button
                        type='submit'
                        className="btn btn-light todo-tag-button">
                    <i className="bi bi-arrow-return-right"/>
                </button>
                </span>
            </form>
        )
    }
}
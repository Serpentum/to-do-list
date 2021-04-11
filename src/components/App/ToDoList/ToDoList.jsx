import React from "react";
import ToDoListItem from "../ToDoListItem";
import './ToDoList.css'

const ToDoList = ({ todos, onDelete , onToggleStatus, onToggleImportant}) => {

    const buildList = todos.map((item) => {
        const { id, ...itemProps} = item;

        return (
            <li key={id} className="todo-list-item list-group-item">
                <ToDoListItem
                    { ...itemProps }
                    onDeleted={() => onDelete(id)}
                    onToggleStatus={() => onToggleStatus(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    });
    return (
        <ul className='todo-list list-group'>
            { buildList }
        </ul>

    )
};

export default ToDoList;
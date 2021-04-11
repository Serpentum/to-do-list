import React from "react";
import './ToDoListItem.css'

const ToDoListItem = (props) => {
    let classNames = 'todo-list-item-container';
    const {
        label,
        onDeleted,
        status,
        important,
        onToggleStatus,
        onToggleImportant, } = props;

    status ?
        classNames += ' done' :
        classNames.replace(' done', '');

    important ?
        classNames += ' important' :
        classNames.replace(' important', '');

    return (
        <span
            className={classNames}>
            <span
                className='todo-list-item-label'
                onClick={onToggleStatus}>
            { label }
            </span>
            <div className="button-wrapper">
                <span>
                    <button
                        className="btn btn-danger todo-trash-button"
                        onClick={onDeleted}>
                        <i className='bi bi-trash'/>
                    </button>
                </span>
                <span>
                    <button
                        onClick={onToggleImportant}
                        className="btn btn-light todo-tag-button">
                        <i className='bi bi-tag'/>
                    </button>
                </span>
            </div>
        </span>
    );
};

export default ToDoListItem;
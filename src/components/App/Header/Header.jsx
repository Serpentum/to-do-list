import React from "react";
import './Header.css'
import WidgetTodoCounter from "../WidgetTodoCounter";

const Header = ({done, onQueue}) => {
    return (
        <header className="header">
            <h1>My ToDo list</h1>
            <WidgetTodoCounter ready={done} unready={onQueue}/>
        </header>
    )
};

export default Header;
import React from "react";

const WidgetTodoCounter = (props) => {
    const { ready, unready } = props;
    return (
        <div>
            <span>{ ready } task ready, { unready } on queue</span>
        </div>
    );
};

export default WidgetTodoCounter;
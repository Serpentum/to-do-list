import React, { Component } from "react";
import './SearchField.css'

export default class SearchField extends Component {
    state = {
        term: '',
    };

    onSearch = (e) => {
        const term = e.target.value;
        this.setState( { term } );
        this.props.onSearch(term);
    };

    render() {
        return (
            <input
                onChange={this.onSearch}
                className="form-control"
                placeholder="Search here!"
                value={this.state.searchValue}
                type="search"
            />
        );
    }
}
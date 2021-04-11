import React, { Component }from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{

    onFiltering = (e) => {
        this.props.onFiltering(e.target.value);
    };

    render() {
        return (
            <div className='btn-group btn-group-toggle'>
                <label className='btn btn-secondary'>
                    <input
                        onClick={this.onFiltering}
                        type="radio"
                        value='all'/> All
                </label>
                <label className='btn btn-secondary'>
                    <input
                        onClick={this.onFiltering}
                        type="radio"
                        value='important'/> Important
                </label>
                <label className='btn btn-secondary'>
                    <input
                        onClick={this.onFiltering}
                        type="radio"
                        value='status'/> Done
                </label>
            </div>
        )
    }
}
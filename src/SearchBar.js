import React, { Component } from 'react'


class SearchBar extends Component {
    render() {
        return (
            <div>
                {/* Have to use htmlFor, otherwise it'll think it's the JavaScript for loop. */}
                <label htmlFor="fruit-filter"> Filter These Fruits:</label> 
                <input onChange={this.props.handleUserInput} type="text" name="fruit-filter" id="fruit-filter" />
            </div>
        )
    }
}

export default SearchBar
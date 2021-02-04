import React, { Component } from 'react'

class FilteredList extends Component {
    render() {
        return (
            <ul>
                <h3>Filtered List:</h3>
                {this.props.filteredList.map( (fruit, index) => {
                    if ( fruit.includes(this.props.userInput) ) {
                    return <li>{fruit}</li>  
                    }
                })}
            </ul>
        )
    }
}

export default FilteredList
import React, { Component } from 'react'

class AntiFilteredList extends Component {
    render() {
        return (
            <ul>
                <h3>Anti-Filtered List:</h3>
                {this.props.filteredList.map( (fruit, index) => {
                    if ( !fruit.includes(this.props.userInput) ) {
                    return <li>{fruit}</li>  
                    }
                })}
            </ul>
        )
    }
}

export default AntiFilteredList
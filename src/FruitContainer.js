import React, { Component } from 'react'
import FilteredList from './FilteredList'
import AntiFilteredList from './AntiFilteredList'
import SearchBar from './SearchBar'

class FruitContainer extends Component {
    state = {
        filteredList: this.props.fruits,
        userInput: ''
    }

    handleUserInput = (event) => {
        let newInput = event.target.value 
        this.setState({
            userInput: newInput
        })
    }

    render() {
        return (
            <div>
                <h1>Fruit is Good.</h1>
                <SearchBar handleUserInput={this.handleUserInput} userInput={this.state.userInput} />
                <FilteredList filteredList={this.state.filteredList} userInput={this.state.userInput} />
                <AntiFilteredList filteredList={this.state.filteredList} userInput={this.state.userInput} />
            </div>
        )
    }
}

export default FruitContainer
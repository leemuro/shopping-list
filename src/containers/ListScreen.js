import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ShoppingList from '../components/ShoppingList'
import { connect } from 'react-redux'
import { showAdd } from '../actions'
import { clearItems, toggleItem } from '../store'

class ListScreen extends Component {
    constructor(props) {
        super(props)
        this.onClearClick = this.onClearClick.bind(this)
        this.onAddClick = this.onAddClick.bind(this)
        this.onItemClick = this.onItemClick.bind(this)
    }
    render() {
        return (
            <div>
                <NavBar 
                    leftItem={
                        <button onClick={this.onClearClick}>Clear</button>
                    }
                    title="Shopping List"
                    rightItem={
                        <button onClick={this.onAddClick}>Add</button>
                    }
                    fixed={true}
                />
                <ShoppingList 
                    categorizedItems={this.props.categorizedItems} 
                    itemCompletionStates={this.props.itemCompletionStates}
                    onItemClick={this.onItemClick}
                />
            </div>
        )
    }
    onClearClick() {
        if(confirm('Are you sure you want to clear the list?'))
            this.props.onClearClick()
    }
    onAddClick() {
        this.props.onAddClick()
    }
    onItemClick(itemId) {
        this.props.onItemClick(itemId)
    }
}

function mapStateToProps(state) {
    return {
        categorizedItems: state.categorizedItems,
        itemCompletionStates: state.itemCompletionStates
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClearClick: () => {
            clearItems()
        },
        onAddClick: () => {
            dispatch(showAdd())
        },
        onItemClick: (itemId) => {
            toggleItem(itemId)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen)
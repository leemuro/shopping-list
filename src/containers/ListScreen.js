import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ShoppingList from '../components/ShoppingList'
import { connect } from 'react-redux'
import { showAdd, clearItems, toggleItem } from '../actions'

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
    onItemClick(categoryName, itemId) {
        this.props.onItemClick(categoryName, itemId)
    }
}

function mapStateToProps(state) {
    return {
        categorizedItems: state.categorizedItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClearClick: () => {
            dispatch(clearItems())
        },
        onAddClick: () => {
            dispatch(showAdd())
        },
        onItemClick: (categoryName, itemId) => {
            dispatch(toggleItem(categoryName, itemId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen)
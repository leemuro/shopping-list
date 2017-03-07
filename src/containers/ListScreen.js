import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ShoppingList from '../components/ShoppingList'
import { connect } from 'react-redux'
import { showAdd, clearItems } from '../actions'
import categorizeItems from '../domain/categorizer'

class ListScreen extends Component {
    constructor(props) {
        super(props)
        this.onClearClick = this.onClearClick.bind(this)
        this.onAddClick = this.onAddClick.bind(this)
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
                <ShoppingList categorizedItems={this.props.categorizedItems} />
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
}

function mapStateToProps(state) {
    return {
        categorizedItems: categorizeItems(state.items)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClearClick: () => {
            dispatch(clearItems())
        },
        onAddClick: () => {
            dispatch(showAdd())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen)
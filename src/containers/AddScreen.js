import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import AddItemsBox from '../components/AddItemsBox'
import { connect } from 'react-redux'
import { showList } from '../actions'
import { addItems } from '../store'

class AddScreen extends Component {
    constructor(props) {
        super(props)
        this.onAddItemsChange = this.onAddItemsChange.bind(this)
        this.onCancelClick = this.onCancelClick.bind(this)
        this.onDoneClick = this.onDoneClick.bind(this)
        this.state = { newItemsText: '' }
    }
    render() {
        return (
            <div>
                <NavBar
                    leftItem={
                        <button onClick={this.onCancelClick}>Cancel</button>
                    }
                    title="Add Items"
                    rightItem={
                        <button onClick={this.onDoneClick}>Done</button>
                    }
                    fixed={false}
                />
                <AddItemsBox onChange={this.onAddItemsChange} />
            </div>
        )
    }
    onAddItemsChange(event) {
        this.setState({
            addItemsText: event.target.value
        })
    }
    onCancelClick() {
        this.props.onCancelClick()
    }
    onDoneClick(event) {
        let newItems = this.state.addItemsText.split('\n').filter(i => i.trim().length > 0)
        this.props.onDoneClick(newItems)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCancelClick: () => {
            dispatch(showList())
        },
        onDoneClick: (newItems) => {
            addItems(newItems)
            dispatch(showList())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddScreen)
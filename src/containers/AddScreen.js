import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import AddItemsBox from '../components/AddItemsBox'
import { connect } from 'react-redux'
import { showList } from '../actions'

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
                <div>
                    <NavBar
                        leftItem={
                            <button onClick={this.onCancelClick}>Cancel</button>
                        }
                        title="Add Items"
                        rightItem={
                            <button onClick={this.onDoneClick}>Done</button>
                        }
                    />
                </div>
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
        this.props.onDoneClick(this.state.addItemsText)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCancelClick: () => {
            dispatch(showList())
        },
        onDoneClick: (addItemsText) => {
            console.log(addItemsText)
            dispatch(showList())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddScreen)
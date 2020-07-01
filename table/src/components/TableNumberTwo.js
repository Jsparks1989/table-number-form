import React from 'react';
import { connect } from 'react-redux'
import { addNum, bkspNum, deleteNum, submitNum } from '../actions/index';

class TableNumberTwo extends React.Component {
    
    //-- THINGS TO DO --//
    // 1) Need a function thay will strip the , out of the array of numbers being rendered in 
    //    the input.
    // 2) Need to finish the Bksp and Clear button. Will come back to this later, focus on 
    //    submitting a table number right now.
    // 3) Now that the table number (as an array) can be successfully added to the check, I need to 
    //    focus on routing next. I need the app to display other components once 'checkNumber' is added 
    //    to the check object. 
    //    Maybe use some logic that will see if 'checkNumber' is true in the check object...
    //    this can be used to determine when to display other components.

    renderNumberButtons = () => {
        return this.props.tableNumButtons.map((button) => {
            return(
                <div className='items' key={button.number}>
                    <button className='ui button' type='button' onClick={() => this.props.addNum(button.number)}>{button.number}</button>
                </div>
            );
        });
    }

    submitNumForm = (num) => {
        //e.preventDefault();
        this.props.submitNum(num);
    }


    render() {
        console.log(this.props);
        return(
            <form className="ui form">
                <div className="field">
                    <label>Table Number</label>
                    <input type="text" name="first-name" placeholder="Please Enter Table#" value={this.props.tableNumber}/>
                </div>
                { this.renderNumberButtons() }
                <button type='button' onClick={() => this.submitNumForm(this.props.tableNumber)}>Enter</button>
                <button type='button' onClick={this.props.deleteNum}>Clear</button>
                <button type='button' onClick={this.props.bkspNum}>Bksp</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        tableNumber: state.tableNumReducer,
        tableNumButtons: state.tableNumButtons,
        check: state.checkReducer
    };
}


export default connect(mapStateToProps, 
    { 
        addNum: addNum,
        bkspNum: bkspNum,
        deleteNum: deleteNum,
        submitNum: submitNum
    })(TableNumberTwo);
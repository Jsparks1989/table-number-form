import React from 'react';
import { connect } from 'react-redux'
import { addNum, bkspNum, deleteNum, sendNum } from '../actions/index';

class TableNumberTwo extends React.Component {
    
    //-- Need a function thay will strip the , out of the array of numbers being rendered in 
    // the input. 

    renderNumberButtons = () => {
        return this.props.tableNumButtons.map((button) => {
            return(
                <div className='items' key={button.number}>
                    <button className='ui button' type='button' onClick={() => this.props.addNum(button.number)}>{button.number}</button>
                </div>
            );
        });
    }


    render() {
        console.log(this.props);
        return(
            <form className="ui form">
                <div className="field">
                    <label>Table Number</label>
                    <input type="text" name="first-name" placeholder="Please Enter Table#" value={this.props.tableNumReducer}/>
                </div>
                {/* <button className="ui button" type="button" onClick={() => this.props.addNum('1')}>1</button>
                <button className="ui button" type="button" onClick={() => this.props.addNum('2')}>2</button> */}
                { this.renderNumberButtons() }
                <button type='submit' onClick={this.props.sendNum}>Enter</button>
                <button type='button' onClick={this.props.deleteNum}>Clear</button>
                <button type='button' onClick={this.props.bkspNum}>Bksp</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        // changeNumReducer: state.changeNumReducer,
        tableNumReducer: state.tableNumReducer,
        tableNumButtons: state.tableNumButtons
    };
}


export default connect(mapStateToProps, 
    { 
        addNum: addNum,
        bkspNum: bkspNum,
        deleteNum: deleteNum,
        sendNum: sendNum
    })(TableNumberTwo);
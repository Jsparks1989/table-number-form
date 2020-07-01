import React from 'react';
import { connect } from 'react-redux'
import { addNum } from '../actions/index';

class TableNumberTwo extends React.Component {
    
    

    render() {
        console.log(this.props);
        return(
            <form className="ui form">
                <div className="field">
                    <label>Table Number</label>
                    <input type="text" name="first-name" placeholder="Please Enter Table#" value={this.props.tableNumReducer}/>
                </div>
                <button className="ui button" type="button">1</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        changeNumReducer: state.changeNumReducer,
        tableNumReducer: state.tableNumReducer
    };
}


export default connect(mapStateToProps, { addNum: addNum })(TableNumberTwo);
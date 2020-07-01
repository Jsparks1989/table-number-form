import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { addNum } from '../actions/index';

class TableNumberOne extends React.Component {

    renderInput = (formProps) => {
        console.log('renderInput:');
        console.log(formProps);
        return(
            <div>
                <label>{ formProps.label }</label>
                <input { ...formProps.input } />
            </div>
        );
    }

    renderButton = () => {
        return(
            <button onClick={() => this.props.addNum(1)} >1</button>
        );
    }

    render() {
        return(
            <div>
                <form className='ui form'>
                    <Field name='Input' component={this.renderInput} label='Input' value={this.props.checkReducer} autoComplete='off' />
                    <Field name='one' component={this.renderButton} label='1' />
                </form>
            </div>
        );
    }
}



const formWrapped = reduxForm({
    form: 'TableNumberOne'
})(TableNumberOne);

const mapStateToProps = (state) => {
    console.log('mapStateToProps:');
    console.log(state);
    return {
        checkReducer: state.checkReducer,
        tableNumReducer: state.tableNumReducer
    };
}


export default connect(mapStateToProps, {addNum: addNum})(formWrapped);
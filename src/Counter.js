import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add2, sub2} from "./redux/actions/actions";

class Counter extends Component {

    render() {

        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={this.props.onAdd}>Add</button>
                    <button onClick={this.props.onSub}>Diff</button>
                </div>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add2()),
        onSub: () => dispatch(sub2())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Counter);
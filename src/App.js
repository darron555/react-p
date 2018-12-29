import React, {Component} from 'react'
import {connect} from 'react-redux'

import './App.scss'
import Counter from './Counter'
import {add, addN, sub, onAsyncAdd} from "./redux/actions/actions";

class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>

                <hr/>

                <div className="Actions">
                    <button onClick={this.props.onAdd}>Добавить 1</button>
                    <button onClick={this.props.onSub}>Вычесть 1</button>
                    <button onClick={this.props.onAddNumber.bind(this, 15)}>Добавить число</button>
                </div>

                <div className="Actions">
                    <button onClick={() => this.props.onAsyncAdd(1000)}>Асинхронно Добавить 1000</button>

                </div>

                <Counter />
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number) => dispatch(addN(number)),
        onAsyncAdd: number => dispatch(onAsyncAdd(number))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)

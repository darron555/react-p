import React from 'react'
import Counter2 from '../Counter2/Counter2'

class Counter extends React.Component {


    state = {
        counter: 0
    }

    addCounter()  {

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    diffCounter() {

        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }


    render() {

        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <Counter2/>
                <button onClick={this.addCounter.bind(this)}>+</button>
                <button onClick={this.diffCounter.bind(this)}>-</button>
            </>
        )

        // return [
        //         <h2 key={1}>Counter {this.state.counter}</h2>,
        //         <button key={2} onClick={this.addCounter.bind(this)}>+</button>,
        //         <button key={3} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     ]
    }
}


export default Counter
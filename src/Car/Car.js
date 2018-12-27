import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import Radium from 'radium';
import classes from './Car.css'
import withClass from '../hoc/withClass'


class Car extends Component {


    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }


    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }

    }

    render() {

        const inputClasses = [classes.input]

        if (this.props.name) {
            inputClasses.push(classes["input-green"])

            if (this.props.name.length > 4) {
                inputClasses.push(classes.bold)
            }

        } else {
            inputClasses.push(classes["input-red"])
        }


        return (
            <React.Fragment>
                <h3>Car: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input
                    ref={this.inputRef }
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.deleteCar}>Delete</button>
            </React.Fragment>
        )
    }

}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    deleteCar: PropTypes.func
}

export default withClass(Car, classes.Car)

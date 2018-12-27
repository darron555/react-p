import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'


export const ClickedContext = React.createContext(false)


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: [
                {name: 'Ford', year: 1988},
                {name: 'Mazda', year: 2000}
            ],
            pageTitle: 'React title',
            showCars: true,
            clicked: false
        }
    }

    renderCars() {

        if (!this.state.showCars) {
            return null;
        }

        return this.state.cars.map((car, index) => {
            return <Car
                key={index}
                index={index}
                name={car.name}
                year={car.year}
                onChangeName={event => this.onChangeName(event.target.value, index)}
                deleteCar={this.deleteCarHandle.bind(this, index)}
            />
        })
    }

    onChangeName = (name, index) => {
        let cars = [...this.state.cars];
        cars[index].name = name;

        this.setState({cars})

    }

    deleteCarHandle (index) {
        let cars = [...this.state.cars];
        cars.splice(index, 1)

        this.setState({cars})

    }

    toggleCars = () => {
        this.setState({showCars: !this.state.showCars})

    }


    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <h1>{this.props.title}</h1>
                <button className='AppButton' onClick={this.toggleCars}>Toggle</button>
                <button onClick={() => this.setState({clicked: true})}>Clicked 2</button>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter  />
                </ClickedContext.Provider>


                <div style={
                    {
                        width: 400,
                        margin: 'auto',
                        paddingTop: 20
                    }
                }>
                    <ErrorBoundary>
                        {this.renderCars()}
                    </ErrorBoundary>

                </div>

            </div>
        )
    }
}

export default App;

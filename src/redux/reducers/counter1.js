import {ADD, ADDN, SUB} from "../actions/actionTypes";

const initialState = {
    counter: 11
}

export default function counter1(state = initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1,
                number: state.number
            }
        case SUB:
            return {
                counter: state.counter - 1,
                number: state.number
            }
        case ADDN:
            return {
                counter: state.counter + (+action.number),
                number: state.number
            }

        default:
            return state
    }


}
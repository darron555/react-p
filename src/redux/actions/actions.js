import {ADD, ADD2, ADDN, SUB, SUB2} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add2() {
    return {
        type: ADD2
    }
}

export function addN(number) {
    return {
        type: ADDN,
        number
    }
}
export function sub2() {
    return {
        type: SUB2
    }
}

export function onAsyncAdd(number) {
    return dispatch => {
        setTimeout(() => {
            dispatch(addN(number))
        }, 3000)
    }
}
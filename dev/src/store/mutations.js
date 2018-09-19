import {state} from './state.js';

export const UPDATE_ID = (State, id) => {
    State.currentId = parseInt(id)
}

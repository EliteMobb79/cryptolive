import { handleAction } from '../actions/handleaction';

const initialState = {
    ico_data : [],
}

const ICOReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_ICO:
            return { ...state }
            break;
        case handleAction.GET_ICO:
            return {...state, ico_data: actions.payload}
            break;
        default:
            return state
    }

}

export default ICOReducer;
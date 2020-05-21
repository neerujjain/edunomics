

import _ from 'lodash'
export default (state={},action)=>{
    // console.log(action.payload);
    switch(action.type) {
        case 'FETCH_TASKS':
            return {...state,..._.mapKeys(action.payload,'_id')};
        case "EDIT_TASK":
            return {...state,[action.payload.id]:action.payload};
            case "DELETE_TASK":
                return _.omit(state,action.payload)
            case "DELETE_ALL_TASK":
                return []


        default:
            return state;
    }
}
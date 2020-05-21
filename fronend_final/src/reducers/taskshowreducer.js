

// import _ from 'lodash'
export default (state={},action)=>{
    // console.log(action.payload);
    switch(action.type) {
        case "FETCH_SINGLE_TASK":
            return {...state,"currenttask":action.payload};



        default:
            return state;
    }
}
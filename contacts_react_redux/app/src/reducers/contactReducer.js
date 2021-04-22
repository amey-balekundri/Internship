import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
    DELETE_ALL,
} from '../actions/Types'

const initialState ={
    contacts : []
}

const contactReducer = (state = initialState,action) =>{
    let temp = [...state.contacts];
    switch (action.type){
        
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts,action.payload]
            }

        case EDIT_CONTACT:
            temp[action.editIndex]=action.payload;
            return {
                ...state,
                contacts:temp,
            }

        case DELETE_CONTACT:
            temp.splice(action.deleteIndex,1);
            return {
                ...state,
                contacts:temp,
            }
        
        case DELETE_ALL:
            temp.splice(0,temp.length);
            return {
                ...state,
                contacts:temp,
            }
        

        default:
            return state;
    }
}

export default contactReducer;


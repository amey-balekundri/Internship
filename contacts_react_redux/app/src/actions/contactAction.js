import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
    DELETE_ALL
} from './Types';

export const createContact = (contact) => {
    return{
        type : ADD_CONTACT,
        payload : contact
    }
}

export const editContact = (contact,index) => {
    return {
        type : EDIT_CONTACT,
        payload : contact,
        editIndex : index,
    }
}

export const deleteContact = (index) => {
    return {
        type : DELETE_CONTACT,
        deleteIndex : index,
    }
}

export const deleteAll = () => {
    return {
        type : DELETE_ALL,
    }
}

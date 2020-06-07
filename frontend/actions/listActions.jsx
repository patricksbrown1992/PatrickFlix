import * as APIUtil from '../util/listUtil';

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const DESTROY_LIST = 'DESTROY_LIST';
export const CLEAR_LISTS = 'CLEAR_LISTS';




const receiveList = list => {
    return ({
        type: RECEIVE_LIST,
        list
    });
};

const destroyList = list => {

    return ({
        type: DESTROY_LIST,
        list
    });
};

const receiveLists = lists => {
    
    return ({

        type: RECEIVE_LISTS,
        lists
    });
};

export const clearLists = () => {
    return {
        type: CLEAR_LISTS
    }
}

export const getLists = (user) => dispatch => (
    APIUtil.getLists(user).then(lists => (dispatch(receiveLists(lists))))
);

export const getList = (id) => dispatch => (
    APIUtil.getList(id).then(list => (dispatch(receiveList(list))))
);

export const createList = (list) => dispatch => {

    return APIUtil.createList(list).then(list => dispatch(receiveList(list)));

};

export const updateList = (list) => dispatch => (
    APIUtil.updateList(list).then(list => (dispatch(receiveList(list))))
);

export const deleteList = (list) => dispatch => {
    
    return APIUtil.deleteList(list).then(list => (dispatch(destroyList(list))));
};



    
import { connect } from 'react-redux';
import ListForm from './listForm';
import { clearErrors, logout } from '../../actions/sessionActions';
import {getVideos} from '../../actions/videoActions';
import {receiveModal} from '../../actions/modalActions';
import {getLists, clearLists, deleteList} from '../../actions/listActions';

const msp = state => {
    return {

    errors: state.errors,
    videos: state.entities.videos,
    user: state.entities.user[state.session.id],
    lists: Object.values(state.entities.lists)
    }
};

const mdp = dispatch => ({
    getVideos: () => dispatch(getVideos()),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    receiveModal: (id) => dispatch(receiveModal(id)), 
    getLists: user => dispatch(getLists(user)),
    clearLists: () => dispatch(clearLists()),
    deleteList: list => dispatch(deleteList(list))

});

export default connect(msp, mdp)(ListForm);
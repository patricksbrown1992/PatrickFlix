import { connect } from 'react-redux';
import MyListForm from './myListRowForm';
import {receiveModal, clearModal} from '../../actions/modalActions';
import {createList} from '../../actions/listActions';

const msp = state => ({
    errors: state.errors,
    videos: Object.values(state.entities.videos),
    modal: state.modal,
    user: state.session.id
});


const mdp = dispatch => ({
    receiveModal: id => dispatch(receiveModal(id)),
    clearModal: () => dispatch(clearModal()),
    createList: (list) => dispatch(createList(list))
});

export default connect(msp, mdp)(MyListForm);
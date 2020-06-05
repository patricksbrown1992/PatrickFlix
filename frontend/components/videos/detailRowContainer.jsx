import { connect } from 'react-redux';
import DetailRowForm from './detailRowForm';
import {receiveModal, clearModal} from '../../actions/modalActions'

const msp = state => ({
    errors: state.errors,
    videos: Object.values(state.entities.videos),
    modal: state.modal
});


const mdp = dispatch => ({
    receiveModal: id => dispatch(receiveModal(id)),
    clearModal: () => dispatch(clearModal())
});

export default connect(msp, mdp)(DetailRowForm);
import { connect } from 'react-redux';
import VideoIndexForm from './videoIndexForm';
import { clearErrors, logout } from '../../actions/sessionActions';
import {getVideos} from '../../actions/videoActions';
import {receiveModal} from '../../actions/modalActions';

const msp = state => ({
    errors: state.errors,
    videos: Object.values(state.entities.videos),
    user: state.session.id
});

const mdp = dispatch => ({
    getVideos: () => dispatch(getVideos()),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    receiveModal: (id) => dispatch(receiveModal(id))
});

export default connect(msp, mdp)(VideoIndexForm);
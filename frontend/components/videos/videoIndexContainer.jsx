import { connect } from 'react-redux';
import VideoIndexForm from './videoIndexForm';
import { clearErrors, logout } from '../../actions/sessionActions';
import {getVideos} from '../../actions/videoActions';

const msp = state => ({
    errors: state.errors,
    videos: Object.values(state.entities.videos),
});

const mdp = dispatch => ({
    getVideos: () => dispatch(getVideos()),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(VideoIndexForm);
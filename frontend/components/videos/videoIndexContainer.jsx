import { connect } from 'react-redux';
import VideoIndexForm from './videoIndexForm';
import { clearErrors, logout } from '../../actions/sessionActions';

const msp = state => ({
    errors: state.errors
});

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(VideoIndexForm);
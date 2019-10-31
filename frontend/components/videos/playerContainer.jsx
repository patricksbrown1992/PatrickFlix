import { connect } from 'react-redux';
import Player from './playerForm';
import { clearErrors, logout } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
})

const mdp = dispatch => ({

    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Player);
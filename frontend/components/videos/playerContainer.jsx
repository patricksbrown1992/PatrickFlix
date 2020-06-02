import { connect } from 'react-redux';
import Player from './playerForm';
import { clearErrors, logout } from '../../actions/sessionActions';

import { getVideo } from '../../actions/videoActions';

const msp = (state, ownProps) => {
    // debugger
    return {
        video: state.entities.videos[31]
    }
}

const mdp = (dispatch) => ({
    getVideo: (id) => dispatch(getVideo(id))
})

export default connect(msp, mdp)(Player);
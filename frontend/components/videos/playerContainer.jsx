import { connect } from 'react-redux';
import Player from './playerForm';
import { clearErrors, logout } from '../../actions/sessionActions';

import { getVideo } from '../../actions/videoActions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.video_id];
    return {
        video: video
    }
}

const mdp = (dispatch) => ({
    getVideo: (id) => dispatch(getVideo(id))
})

export default connect(msp, mdp)(Player);
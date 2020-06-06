import { connect } from 'react-redux';
import FeaturedVideoForm from './featuredVideoForm';
import { getVideo, getVideos } from '../../actions/videoActions';

const msp = (state, ownProps) => {
    const video = state.entities.videos[10];
    return {
        video: video,
        videos: Object.values(state.entities.videos)
    }
}

const mdp = (dispatch) => ({
    getVideo: (id) => dispatch(getVideo(id)),
    getVideos: () => dispatch(getVideos())
})

export default connect(msp, mdp)(FeaturedVideoForm);
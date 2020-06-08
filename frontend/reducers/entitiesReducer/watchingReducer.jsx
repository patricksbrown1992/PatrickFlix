import {CLEAR_WATCH, RECEIVE_WATCH} from '../../actions/videoActions';
import { merge } from 'lodash';

const watchingReducer = (state = null, action) => {
   
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WATCH:
            return action.video;
        case CLEAR_WATCH:
            return null;
        
        default:
            return state;

    }
};

export default watchingReducer;
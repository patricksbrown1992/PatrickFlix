import usersReducer from './usersReducer';
import videoReducer from './videoReducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,
    videos: videoReducer
})

export default entitiesReducer;
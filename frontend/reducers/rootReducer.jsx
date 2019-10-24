import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer/entitiesReducer';
import sessionReducer from './sessionReducer';
import errorsReducer from './errors/sessionErrorsReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
})

export default rootReducer;
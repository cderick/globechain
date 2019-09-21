import { combineReducers } from 'redux-immutable';
import apiContentReducer from './apiContent';

const rootReducer = combineReducers({
	apiContent: apiContentReducer,
});

export default rootReducer;

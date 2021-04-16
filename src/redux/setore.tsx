import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import todosReducer from './todos-service/reducer';

const rootReducer = combineReducers({
	// Add other reducers
	todosRedux: todosReducer,
});

// Configure redux
const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type Store = ReturnType<typeof rootReducer>;
export default store;

import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  currentUser: userReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
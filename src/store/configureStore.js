import { createStore, combinedReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducers';

const configureStore = () => { 
    return createStore(
        combinedReducers({
    entries: entriesReducer,
  })
  );
};


export default configureStore;
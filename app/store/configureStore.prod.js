import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';

export default function configureStore(browserHistory) {
  const router = syncHistory(browserHistory);
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, router)
  );
  return store;
}

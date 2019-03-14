import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import DevTools from '../containers/devtools';

export default function configureStore(browserHistory) {
  const router = syncHistory(browserHistory);
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, router, logger),
      DevTools.instrument()
    )
  );
  return store;
}

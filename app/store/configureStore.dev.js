import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import DevTools from '../containers/devtools';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const logger = createLogger({ level: 'info', collapsed: true });
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), thunk, logger),
      DevTools.instrument()
    )
  );
  return store;
}

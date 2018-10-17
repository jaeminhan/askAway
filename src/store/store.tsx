import { applyMiddleware, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';

const history = createHistory();

const epicMiddleware = createEpicMiddleware({
  dependencies: { history }
});

const store = createStore(
  applyMiddleware(
    epicMiddleware,
  )
)

epicMiddleware
export {history};
export default store;

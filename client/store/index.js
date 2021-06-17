import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import usersReducer from './reducers/userReducer';
import distributionsReducer from './reducers/distributionReducer';
import manufacturersReducer from './reducers/manufacturerReducer';
import furnituresRedux from './reducers/furnituresReducer';
import furnitureReducer from './reducers/furnitureReducer';

const reducer = combineReducers({
  auth,
  usersReducer,
  distributionsReducer,
  manufacturersReducer,
  furnituresRedux,
  furnitureReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';

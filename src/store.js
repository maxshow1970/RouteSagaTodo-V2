import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers";
import history from "./utils/history";

import { routerMiddleware } from "react-router-redux";

const sagaMiddleware = createSagaMiddleware();
const sagaMiddlewareIdentification = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
  sagaMiddlewareIdentification
);

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;

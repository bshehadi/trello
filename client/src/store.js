import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import trello from "./reducers/trelloReducer"

export default createStore(
    combineReducers({
		trello
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);
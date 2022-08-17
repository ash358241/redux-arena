import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;
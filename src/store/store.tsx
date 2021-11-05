import { ChatReducer } from "./chat.reducer";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

export const store = createStore(ChatReducer, applyMiddleware(thunk));

import { applyMiddleware, createStore } from "redux";

import { cakeReducer } from "./cakeReducer";

import { logger } from "redux-logger";

// const logger = createLogger();

export const store = createStore(cakeReducer, applyMiddleware(logger));

const unSubscribe = store.subscribe(() => {});

unSubscribe();

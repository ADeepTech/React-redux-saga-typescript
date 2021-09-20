import { TypedUseSelectorHook, useSelector } from "react-redux"
import { applyMiddleware, createStore, Middleware } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"

import { RootAction as RA } from "./store/actions";
import { createRootReducer, RootState as RS } from "./store/reducers"
import createRootSaga from "./store/sagas"

declare module "typesafe-actions" {
  export type RootAction = RA;
  export type RootState = RS;
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}

const logger = createLogger({
    level: "info",
})

export const createReduxStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const enhancer = applyMiddleware(logger, sagaMiddleware)
    const store = createStore(createRootReducer(), enhancer)
    sagaMiddleware.run(createRootSaga())
    return store
}

export const useMintableSelector: TypedUseSelectorHook<RS> = useSelector

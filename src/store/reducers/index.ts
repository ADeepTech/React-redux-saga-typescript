import { combineReducers } from "redux"
import { StateType } from "typesafe-actions"

import { appReducer } from "./app"

export const createRootReducer = () =>
    combineReducers({
        app: appReducer,
    })

export type RootState = StateType<ReturnType<typeof createRootReducer>>

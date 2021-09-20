import { ActionType } from "typesafe-actions"

import * as appActions from "./app"

export const actions = {
    app: appActions,
}

export type RootAction = ActionType<typeof actions>

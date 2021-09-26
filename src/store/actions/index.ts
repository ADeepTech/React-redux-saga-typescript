import { ActionType } from "typesafe-actions"

import * as appActions from "./app"
import * as listingsActions from "./listings"

export const actions = {
    app: appActions,
    listings: listingsActions,
}

export type RootAction = ActionType<typeof actions>

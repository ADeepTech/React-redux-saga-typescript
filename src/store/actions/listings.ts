import { createAction, createAsyncAction } from "typesafe-actions"

import { PortingLocation, PortingProject } from "../../models/app"

// e.FETCH_ALL_SOLD_ITEMS = "@@mintable/LISTING_ITEMS/FETCH_ALL_SOLD_ITEMS",
// e.FETCH_ALL_SOLD_ITEMS_SUCCESS = "@@mintable/LISTING_ITEMS/FETCH_ALL_SOLD_ITEMS_SUCCESS",
// e.FETCH_ALL_SOLD_ITEMS_FAILED = "@@mintable/LISTING_ITEMS/FETCH_ALL_SOLD_ITEMS_FAILED"

export interface GetListingsPayload {
    cardType: string
    number: number
}
export const getListings = createAction("GET_LISITNGS")<GetListingsPayload>()
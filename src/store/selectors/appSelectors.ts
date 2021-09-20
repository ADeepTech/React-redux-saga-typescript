import createCachedSelector from "re-reselect"
import { createSelector } from "reselect"

import { RootState } from "../reducers"

export const selectPortingProjects = (state: RootState) => state.app.portingProjects

export const getCards = (state: RootState) => state.app.cards

export const selectDashboardTableData = createSelector(getCards, (cards) => cards)

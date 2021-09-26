import { all, put, SagaReturnType, select, takeEvery } from "redux-saga/effects"
import { getType, PayloadAction } from "typesafe-actions"

import { actions } from "../actions"
import { getCards } from "../selectors/appSelectors"

const getListings = actions.listings.getListings

function* handleSetCardNumber(action: ReturnType<typeof getListings>) {
    const state: ReturnType<typeof getCards> = yield select(getCards)
    yield put(
        getListings({
            cardType: action.payload.cardType,
            number: action.payload.number,
        })
    )
}

function* watchSetCardNumber() {
    yield takeEvery(getType(getListings), handleSetCardNumber)
}

export default function* listingsSaga() {
    yield all([watchSetCardNumber()])
}

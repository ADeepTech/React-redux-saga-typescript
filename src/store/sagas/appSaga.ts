import { all, put, SagaReturnType, select, takeEvery } from "redux-saga/effects"
import { getType, PayloadAction } from "typesafe-actions"

import { setCardNumber, setCardNumberSuccess } from "../actions/app"
import { getCards } from "../selectors/appSelectors"

function* handleSetCardNumber(action: ReturnType<typeof setCardNumber>) {
    yield put(
        setCardNumberSuccess({
            cardType: action.payload.cardType,
            number: action.payload.number,
        })
    )
}

function* watchSetCardNumber() {
    yield takeEvery(getType(setCardNumber), handleSetCardNumber)
}

export default function* appSaga() {
    yield all([watchSetCardNumber()])
}

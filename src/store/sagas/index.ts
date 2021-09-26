import { all } from "redux-saga/effects"

import appSaga from "./appSaga"
import listingSaga from "./listingSaga"

const createRootSaga = () => {
    function* rootSaga() {
        yield all([appSaga(), listingSaga()])
    }
    return rootSaga
}

export default createRootSaga

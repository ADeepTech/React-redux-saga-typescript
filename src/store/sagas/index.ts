import { all } from "redux-saga/effects";

import appSaga from "./appSaga";

const createRootSaga = () => {
  function* rootSaga() {
    yield all([appSaga()]);
  }
  return rootSaga;
};

export default createRootSaga;

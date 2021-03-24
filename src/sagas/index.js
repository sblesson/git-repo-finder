import { all, fork } from 'redux-saga/effects';

import watchGetPostComponentData from './watchers/getRepoComponentData';

export default function* root() {
  yield all([fork(watchGetPostComponentData)]);
}

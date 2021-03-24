import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_REPO_DATA } from '../../constants';
import { getAPI } from '../../actions/api';
import { setRepos } from '../../actions';

function* workerGetPostComponentData(action) {
  console.log(action, 'action object');

  const repos = yield call(
    getAPI,
    `https://api.github.com/search/repositories?q=${action.searchTerm}+language:${action.language}&sort=stars&order=desc&per_page=${action.count}`
  );
  console.log(repos);
  yield put(setRepos(repos));
}

export default function* watchGetPostComponentData() {
  yield takeLatest(GET_REPO_DATA, workerGetPostComponentData);
}

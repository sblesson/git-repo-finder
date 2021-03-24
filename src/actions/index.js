import { SET_REPOS, GET_REPO_DATA } from '../constants';

export function setRepos(repos) {
  return {
    type: SET_REPOS,
    repos,
  };
}

export function getGitRepoData(searchTerm, language, count) {
  return {
    type: GET_REPO_DATA,
    searchTerm,
    language,
    count,
  };
}

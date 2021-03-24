import { SET_REPOS } from '../constants';

const initialState = { repos: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        repos: action.repos,
      };
    default:
      return state;
  }
}

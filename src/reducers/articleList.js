import {
  SET_PAGE,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  APPLY_AUTHOR_FILTER
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage: action.page
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload[0].articles,
        articlesCount: action.payload[0].articlesCount,
        users: action.payload[1].users,
        usersCount: action.payload[1].usersCount,
        currentPage: 0
      };
    case APPLY_AUTHOR_FILTER:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage: 0
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case PROFILE_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload[1].articles,
        articlesCount: action.payload[1].articlesCount,
        currentPage: 0
      };
    case PROFILE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};

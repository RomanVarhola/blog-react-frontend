import ArticleList from '../ArticleList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.articleList,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const MainView = props => {
  return (
    <div className="col-md-9">

      <ArticleList
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
        currentUser={props.currentUser} />
    </div>
  );
};

export default connect(mapStateToProps)(MainView);

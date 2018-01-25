import React from 'react';
import ArticleMeta from './Article/ArticleMeta';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ArticlePreview = props => {
  const article = props.article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="info">
          <ArticleMeta article={article} currentUser={props.currentUser} />
        </div>
      </div>

        <h3>{article.title}</h3>
        <p>{article.body}</p>

    </div>
  );
}

export default connect(() => ({}))(ArticlePreview);

import ArticleActions from './ArticleActions';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleMeta = props => {
  const article = props.article;

  const canModify = props.currentUser &&
      props.currentUser.username === props.article.author.username;
  return (
    <div className="article-meta">
      <div className="info">
        <Link className="author" to={`/@${article.author.username}`}>
          {article.author.username}
        </Link>
        
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>

        <ArticleActions canModify={canModify} article={article} />
      </div>
    </div>
  );
};

export default ArticleMeta;

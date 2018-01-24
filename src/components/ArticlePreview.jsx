import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ArticlePreview = props => {
  const article = props.article;
  
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
      </div>
        
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      <Link to={`/article/${article.slug}`} className="preview-link">
        <span>Edit</span>
      </Link>
    </div>
  );
}

export default connect(() => ({}))(ArticlePreview);

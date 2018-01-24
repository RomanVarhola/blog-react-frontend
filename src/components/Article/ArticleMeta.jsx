import ArticleActions from './ArticleActions';
import React from 'react';

const ArticleMeta = props => {
  const article = props.article;
  return (
    <div className="article-meta">
      
      <img src={article.author.image} alt={article.author.username} />
      

      <div className="info author">
        
          {article.author.username}
        
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions canModify={props.canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;

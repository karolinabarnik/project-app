import React from "react";
import './styles/Article.css'


const Article = ({title, author, price, rating, image,  comments, tags, publisher, addcomment }) => {
  
    return (
        <div className="container"> 
            <article className="article">
                <div className="articleBloc">
                    <h3>{title}</h3>
                    <span className="articleAuthor">{author}</span>
                    <div className="articlePrice">Price: {price}</div>
                    <div className="articleRating">Rate: {rating} /10</div>
                </div>
                <div className="articleImageBloc">
                    <img className="articleImage" src={image} alt="book"/>
                </div>
            </article>
        </div>
    );
}

export default Article;
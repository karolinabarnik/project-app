import React from "react";
import '../styles/ProductPage.css';

const ProductPage = ({title, author, price, rating, image,  comment, tag, publisher, addComment }) => {
  
    return (
        <div className="container"> 
            <article className="article">
                <div className="articleBloc">
                    <h3>{title}</h3>
                    <span className="articleAuthor">{author}</span>
                    <div className="Publisher">Publisher: {publisher} </div>
                    <div className="articlePrice">Price: {price}</div>
                    <div className="articleRating">Rate: {rating} /10</div>
                    <div className="tags">Tag: {tag} </div>
                    <div className="comments">Comment: {comment}</div>     
                    <div className="addComment"> Add comment: {addComment}</div>
                </div>
                <div className="articleImageBloc">
                    <img className="articleImage" src={image} alt="book"/>
                </div>
            </article>
        </div>
    );
}

//const ProductPage = ({ match }) => {
 // return (
   // <>
     // <div>Strona produktu</div>
      //<Product id={match.params.id} />
      //<Link to="/products">Powrót do listy produktów</Link>
    //</>
  //);
//}

export default ProductPage;
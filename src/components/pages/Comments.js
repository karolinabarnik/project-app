import React from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import ProductPage from './ProductPage';
import '../styles/Comments.css';
import Form from './Form';

const articles = [
  {
      id: 1,
      title: 'Lady in red',
      price: 10,
      rating: 8,
      author: "John Doe",
      image: image1,
      comment: "Very good position, ",
      tag: 'new',
      publisher: 'abs' ,
      addComment: <Form />,

  },
  {
      id: 2,
      title: 'ABC',
      image: image2,
      price: 20,
      rating: 5,
      author: "John Doe",
      comment: "Great story!",
      tag: 'new',
      publisher: 'abs' ,
      addComment: <Form />,
  },
  {
      id: 3,
      title: 'JS Design Patterns',
      image: image3,
      price: 30,
      rating: 6,
      author: "John Doe",
      comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock ",
      tag: 'new, javascript, Design, IT, JS, Bestseller ',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 4,
      title: 'Eloquent Javascript',
      image: image4,
      price: 20,
      rating: 8,
      author: "John Doe",
      comment: "Lorem ipsum ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 5,
      title: 'Of Mice and Men',
      image: image5,
      price: 35,
      rating: 3,
      author: "John Doe",
      comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 6,
      title: 'Of Mice and Men',
      image: image4,
      price: 15,
      rating: 2,
      author: "John Doe",
      comment: "Lorem ipsum ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 7,
      title: 'Of Mice and Men',
      image: image2,
      price: 35,
      rating: 3,
      author: "John Doe",
      comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 8,
      title: 'Of Mice and Men',
      image: image1,
      price: 25,
      rating: 5,
      author: "John Doe",
      comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
      id: 9,
      title: 'Of Mice and Men',
      image: image4,
      price: 30,
      rating: 6,
      author: "John Doe",
      comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
      tag: 'new',
      publisher: 'abs',
      addComment: <Form />,
  },
  {
    id: 10,
    title: 'Of Mice and Men',
    image: image3,
    price: 30,
    rating: 6,
    author: "John Doe",
    comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
    addComment: <Form />,
    tag: 'new',
    publisher: 'abs'
    
},
]

const Comments = () => {
  
  const artList = articles.map(article => (
      <ProductPage key={article.id} {...article} />   
  ))
  
  
  return (
        <div className="commentsHome">
            {artList}
        </div>    
  );
}

export default Comments;
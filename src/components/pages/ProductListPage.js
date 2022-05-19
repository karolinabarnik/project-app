import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

const products = [
{
  id: 1,
  name: 'Lady in red',
  price: 20,
  rating: 8,
  image: {image1},      
},
{
  id: 2,
  name: 'JS Design Patterns',
  price: 15,
  rating: 9.2,
  image: {image2},
},
{
  id: 3,
  name: 'Eloquent Javascript',
  image: {image3},
  price: 20,
  rating: 7.8,
},
{
  id: 4,
  name: 'You don\'t know JS',
  image: {image4},
  price: 40,
  rating: 8.2,
},
{
  id: 5,
  name: 'Of Mice and Men',
  image: {image5},
  rating: 6.4,
  price: 40,
},
];

const ProductListPage = () => {

  const list = products.map(name => (
    <li key={name}>
      <Link to={`/products/${name}`}>{name}</Link>
    </li>
  ))
      
  return (
    <div className="products">

      <h2>Books</h2>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </div>

  );
}

export default ProductListPage;
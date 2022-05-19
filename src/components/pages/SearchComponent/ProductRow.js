import React from "react";
import '../../styles/ProductRow.css';

class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr className="productRow">
          <td className="productName">{name}</td>
          <td className="productPrice">{product.price}</td>
          <td className="producyAuthor">{product.author}</td> 
          <td className="productRating">{product.rating}</td>
          <td className="productTag">{product.tag}</td>
          <td className="productPublisher">{product.publisher}</td>
          <td className="productComment">{product.comment}</td>
        </tr>
      );
    }
  }

  export default ProductRow;
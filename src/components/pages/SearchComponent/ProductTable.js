import React from "react";
import ProductRow from './ProductRow';
import '../../styles/ProductTable.css';

class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.id}
          />
        );
      });
  
      return (
        <table className="container">
          <thead className="table">
            <tr className="productTable">
              <th className="title">Title</th>
              <th className="price">Price </th>
              <th className="author">Author </th> 
              <th className="rating">Rating </th>
              <th className="tag">Tag </th>
              <th className="publisher">Publisher </th>
              <th className="comment">Comment </th>
            </tr>
          </thead>
          <tbody className="tableRows">{rows}</tbody>
        </table>
      );
    }
  }

  export default ProductTable;
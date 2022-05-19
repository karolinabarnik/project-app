import React from "react";
import ReactDOMClient from 'react-dom/client';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../../styles/FilterableProductTable.css';

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <h1>Books Collection</h1>
        <div className="FilterableProductTable">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        </div>
      </div>
    );
  }
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Lady in red',
    price: 10,
    rating: 8,
    author: "John Doe",
    comment: "Very good position, ",
    tag: 'new',
    publisher: 'abs',
    stocked: true,
},
{
    id: 2,
    name: 'ABC',
    price: 20,
    rating: 5,
    author: "John Doe",
    comment: "Great story!",
    tag: 'new',
    publisher: 'abs',
    stocked: false,
},
{
    id: 3,
    name: 'JS Design Patterns',
    price: 30,
    rating: 6,
    author: "John Doe",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock ",
    tag: 'new, javascript, Design, IT, JS, Bestseller ',
    publisher: 'abs',
    stocked: true,
},
{
    id: 4,
    name: 'Eloquent Javascript',
    price: 20,
    rating: 8,
    author: "John Doe",
    comment: "Lorem ipsum ",
    tag: 'new',
    publisher: 'abs',
    stocked: true,
},
{
    id: 5,
    name: 'Of Mice and Men',
    price: 35,
    rating: 3,
    author: "John Doe",
    comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
    tag: 'new',
    publisher: 'abs',
    stocked: true,
},
{
    id: 6,
    name: 'Begin to Code with JavaScript',
    price: 15,
    rating: 2,
    author: "John Doe",
    comment: "Lorem ipsum ",
    tag: 'new',
    publisher: 'abs',
    stocked: true,
},
{
    id: 7,
    name: 'JavaScript Cookbook: Programming the Web',
    price: 35,
    rating: 3,
    author: "John Doe",
    comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
    tag: 'new',
    publisher: 'abs',
    stocked: false,
},
{
    id: 8,
    name: 'Web Design with Html, Css, JavaScript and Jquery Set',
    price: 25,
    rating: 5,
    author: "Jon Duckett",
    comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
    tag: 'new',
    publisher: 'abs',
    stocked: true,
},
{
    id: 9,
    name: 'The JavaScript Workshop',
    price: 30,
    rating: 6,
    author: "Jahred Love, Daniel Rosenbaum",
    comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word ",
    tag: 'new',
    publisher: 'abs',
    stocked: false,
},
{
  id: 10,
  name: 'Html, CSS & JavaScript in Easy Steps',
  price: 30,
  rating: 6,
  author: "Mike McGrath",
  comment: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word",
  tag: 'new',
  publisher: 'abs',
  stocked: true,
},
{
  id: 11,
  category: 'Romance',
  name: 'Beginning JavaScript: The Ultimate Guide to Modern JavaScript',
  price: 10,
  rating: 8,
  author: "Russ Ferguson",
  comment: "Very good position, ",
  tag: 'new',
  publisher: 'abs',
  stocked: true,
},

];


const root = ReactDOMClient.createRoot(document.getElementById('container'));
root.render(<FilterableProductTable products={PRODUCTS} />);



export default FilterableProductTable;
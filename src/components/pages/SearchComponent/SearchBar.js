import React from "react";
import '../../styles/SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form className="searchForm">
          <input
            className="inputSearch"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p className="inputCheckbox">
            <input
             className="inputCheck"
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

  export default SearchBar
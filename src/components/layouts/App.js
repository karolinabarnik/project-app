import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Preferences from '../pages/Preferences';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import useToken from '../useToken';
import ProductPage from '../pages/ProductPage';
import TagsPage from '../pages/TagsPage';
import ProductListPage from '../pages/ProductListPage';
import Comments from '../pages/Comments';
import SearchComponent from '../pages/SearchComponent/SearchComponent';
import { Provider } from 'react-redux'
import store from '../store/store';
import HomePage from '../pages/HomePage';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Provider store={store}>
    <div className="wrapper">
      <h1>Books Collection</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/products" element={<ProductListPage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/comments" element={<Comments/>} />
          <Route path="/tags" element={<TagsPage/>} />
          <Route path="/search" element={<SearchComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
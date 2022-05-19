import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import TagsPage from '../pages/TagsPage';
import ProductListPage from '../pages/ProductListPage';
import Dashboard from '../pages/Dashboard';
import Preferences from '../pages/Preferences';
import Comments from '../pages/Comments';
import SearchComponent from '../pages/SearchComponent/SearchComponent';


const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<ProductListPage/>} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/comments" element={<Comments/>} />
      <Route path="/tags" element={<TagsPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/preferences" element={<Preferences/>} />
      <Route path="/search" element={<SearchComponent/>} />

    </Routes>
  )
}

export default Page;
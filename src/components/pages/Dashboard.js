import React from 'react';
import '../styles/Dashboard.css';
import Header from '../layouts/Header';
import Navigation from '../layouts/Navigation';
import Page from '../layouts/Page';
import Footer from '../layouts/Footer';

export default function Dashboard() {
  return(
    <div className="dashboard">
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <Navigation />
        </aside>
      <section className="page">
          <Page />
        </section>
      </main>
      <footer>
          <Footer />
      </footer>
    </div>
    
  );
}
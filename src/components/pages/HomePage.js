import React from "react";
import Article from '../Article';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import '../styles/Homepage.css';


const articles = [
    {
        id: 1,
        title: 'Lady in red',
        price: 10,
        rating: 8,
        author: "John Doe",
        image: image1,
    },
    {
        id: 2,
        title: 'ABC',
        image: image2,
        price: 20,
        rating: 5,
        author: "John Doe"    
    },
    {
        id: 3,
        title: 'JS Design Patterns',
        image: image3,
        price: 30,
        rating: 6,
        author: "John Doe"
    },
    {
        id: 4,
        title: 'Eloquent Javascript',
        image: image4,
        price: 20,
        rating: 8,
        author: "John Doe"
    },
    {
        id: 5,
        title: 'Of Mice and Men',
        image: image5,
        price: 35,
        rating: 3,
        author: "John Doe"
    },
    {
        id: 6,
        title: 'Of Mice and Men',
        image: image4,
        price: 15,
        rating: 2,
        author: "John Doe"
    },
    {
        id: 7,
        title: 'Of Mice and Men',
        image: image2,
        price: 35,
        rating: 3,
        author: "John Doe"
    },
    {
        id: 8,
        title: 'Of Mice and Men',
        image: image1,
        price: 25,
        rating: 5,
        author: "John Doe"
    },
    {
        id: 9,
        title: 'Of Mice and Men',
        image: image4,
        price: 30,
        rating: 6,
        author: "John Doe"
    },
]

const HomePage = () => {
    
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />      
    ))
    
    return (
    <div className="dashboard">
    <div className="home">
    <header>
        <Header />
    </header>
    <main>
    <aside>
        <Navigation />
    </aside>
    <section className="page">
        {artList}
    </section>
    </main>
    </div>    

</div>
    );
}

export default HomePage;
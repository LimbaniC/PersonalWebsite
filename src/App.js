import './App.css';
import Titlesplash from './components/titlesplash';
import Card from './components/card';
import Profileimage from './components/profileimage';
import { useState, useEffect } from 'react';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    {
      imageSrc: "path/to/image1.jpg",
      title: "Example Title",
      description: "Example description - this is a paragraph that gives some primer to my post",
      link: "/example",
      tag: "blog"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    }
  ];

  useEffect(() => {
    setFilteredCards(cards.filter(card => {
      return (card.tag === 'project' && showProjects) || (card.tag === 'blog' && showBlog) || (!showProjects && !showBlog);
    }));
  }, [showProjects, showBlog]);

  return (
    <div>
      <button onClick={() => setShowBlog(prev => !prev)}>Blog</button>
      <button onClick={() => setShowProjects(prev => !prev)}>Projects</button>

      <div className="containerStyle">
        <Titlesplash />

        {filteredCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}

        <Profileimage />
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex', // This enables flexbox
  alignItems: 'center', // This centers them vertically
  justifyContent: 'space-between', // This adds space between the child components
};

export default App;

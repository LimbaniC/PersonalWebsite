import './App.css';
import Titlesplash from './components/titlesplash';
import Card from './components/card';
import Profileimage from './components/profileimage';
import { useState, useEffect } from 'react';
import './components/blogstyle.css';
import './components/cardstyle.css';

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
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
      return (card.tag === 'project' || showProjects) ^ (card.tag === 'blog' || showBlog) || (!showProjects && !showBlog);
    }));
  }, [showProjects, showBlog]);

  return (
    <div>
      <div className="myblogstyle">
      <button onClick={() => setShowBlog(prev => !prev)}>Show Blog</button>
      <button onClick={() => setShowProjects(prev => !prev)}>Show Projects</button>
      </div>

      <div>
        <Titlesplash />
        <div className="allcards">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
        </div>
        <Profileimage />
      </div>
    </div>
  );
}



export default App;

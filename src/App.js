import './App.css';
import Titlesplash from './components/titlesplash';
import Card from './components/card';
import Profileimage from './components/profileimage';
import { useState } from 'react';
import firstcard from './writing/cards/firstcard.json';
import secondcard from './writing/cards/secondcard.json';



function App() {

const [showProjects, setShowProjects] = useState(false);
const [showBlog, setShowBlog] = useState(false);

const cards = [
  {...firstcard, tag:'blog'}, 
  {...secondcard, tag:'project'}];

const filteredCards = cards.filter(card => {
  return (card.tag === 'project' && showProjects) || (card.tag === 'blog' && showBlog);
}); 


    return (
        <div>
            <button onClick={() => setShowBlog(prev => !prev)}>Blog</button>
            <button onClick={() => setShowProjects(prev => !prev)}>Projects</button>

            <Card 
              imageSrc="path/to/image1.jpg" 
              title="Example Title" 
              description="Example description - this is a paragraph that gives some primer to my post" 
              link="/example" 
            />
            <Card 
              imageSrc="path/to/image2.jpg" 
              title="First project" 
              description="My first project was this portfolio website - this is what I learned from it" 
              link="/first-project" 
            />


            <div className ="containerStyle">
             <Titlesplash/>
  
              {/* {filteredCards.map(card => (
                <Card image={card.image} title={card.title} description={card.description}/>
              ))} */}
  
             <Profileimage/>
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

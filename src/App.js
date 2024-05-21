import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


  /*

  What I need to do: 

  Dynamically create blog pages 
  Dynamically create project pages
  ----> Need a page component that can be dynamically rendered with JSON (call the JSON file WRITING)

  WRITING needs to be structured so that it has an id that can be passed in to the router


  */
  const Example = () => <h2>Example Page</h2>;
  const FirstProject = () => <h2>First Project Page</h2>;
  
<Router> 
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/blog" element= {<App />} />
    <Route path="/example" component={Example} />
    <Route path="/first-project" component={FirstProject} />
  </Routes>
</Router>


export default App;

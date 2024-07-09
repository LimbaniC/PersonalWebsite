import './App.css';
import Titlesplash from './components/titlesplash';
import Card from './components/card';
import Profileimage from './components/profileimage';
import { useState, useEffect, useRef } from 'react';
import pfp from './assets/pfp.png'
import './components/styling.css';
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact';

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
  const [filteredCards, setFilteredCards] = useState([]);

  const me = useRef(null);
  const blog = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


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
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    {
      imageSrc: "path/to/image2.jpg",
      title: "First project",
      description: "My first project was this portfolio website - this is what I learned from it",
      link: "/first-project",
      tag: "project"
    },
    
  ];

  useEffect(() => {
    setFilteredCards(cards.filter(card => {
      return (card.tag === 'project' || showProjects) ^ (card.tag === 'blog' || showBlog) || (!showProjects && !showBlog);
    }));
  }, [showProjects, showBlog]);

  return (
    <div className="App">
      <ScrollToTop/>
      <div className="myblogstyle">
     {/*} <button onClick={() => setShowBlog(prev => !prev)}>Show Blog</button>
      <button onClick={() => setShowProjects(prev => !prev)}>Show Projects</button>
      {/*<button className="btn">DaisyUI example</button>*/}
      </div>

      <div ref={me} className="herosection">
        <ul>
          {/*<li onClick={() => scrollToSection(me)} className="navstyle">me</li>*/}
          <li onClick={() => scrollToSection(blog)} className="navstyle">blog</li>
          <li onClick={() => scrollToSection(project)} className="navstyle">project</li>
          <li onClick={() => scrollToSection(contact)} className="navstyle">contact</li>
        </ul>
        <Titlesplash/>
      </div>

      <div ref={blog} className="blogsection">
        <h2 className="navstyle">Blog</h2>

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

      </div>
      <div ref={project} className="projectsection">
        <h2 className="navstyle">Projects</h2>



      </div>
      <div ref={contact} className="contactmesection">
        <h2 className="navstyle">Contact me</h2>
        <Contact/>


      </div>

    </div>
  );
}



export default App;

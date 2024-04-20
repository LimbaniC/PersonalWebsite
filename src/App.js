import './App.css';
import Titlesplash from './components/titlesplash';
import Card from './components/card';
import Profileimage from './components/profileimage';

function App() {

  const containerStyle = {
    display: 'flex', // This enables flexbox
    alignItems: 'center', // This centers them vertically
    justifyContent: 'space-between', // This adds space between the child components
  };


  return (
    <div className ="containerStyle">
      <Titlesplash/>
      <Card/>
      <Profileimage/>
    </div>
  );
}



export default App;

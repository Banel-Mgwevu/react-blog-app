import './App.css';
import NavBar from './Navbar';
import Home from './Home';

function App() {

  const title = "Welcome to my blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
     <NavBar/>
      <div className='content'>
     <Home/>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;

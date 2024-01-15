import './App.css';
import NavBar from './Navbar';

function App() {

  const title = "Welcome to my blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
     <NavBar/>
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{110}</p>
        <p>{"Hello"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{Math.random()}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;

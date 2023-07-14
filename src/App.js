import './App.css';
import NavBar from './components/NavBar';
import Background from './components/Background';
import Listings from './components/Listing';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;

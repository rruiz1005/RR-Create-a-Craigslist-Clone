// Import data

// Import components
import { Searchbar, searchbar } from './searchBar.js'
import { Gallery } from './gallery';
import './App.css';

function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <Searchbar />
      <Gallery />
      <div className="App">
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;

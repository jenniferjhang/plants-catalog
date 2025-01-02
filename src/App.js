import './App.css';
import Navigation from './components/Navigation'
import CatalogPage from './components/CatalogPage';
import { MyProvider } from './context/MyContext';


function App() {
  return (
    <div className="App">
      <MyProvider>
        <Navigation />
        <CatalogPage />
      </MyProvider>
    </div>
  );
}

export default App;

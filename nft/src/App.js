import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Advertisements from './components/Advertisements';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="main-wrapper">
       <div className="container">
        <main className="main">
          <Advertisements />
        </main>
       </div>
      </div>
    </div>
  );
}

export default App;

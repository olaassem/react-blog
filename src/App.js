import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from'./components/Navbar/Navbar';
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;

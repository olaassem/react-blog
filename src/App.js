import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from'./components/Navbar/Navbar';
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* only 1 route shows at any one time */}
          <Switch>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from'./components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import BlogDetails from './components/BlogDetails/BlogDetails';
import NotFound from './components/404/404';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* only 1 route shows at any one time */}
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/create"><Create /></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

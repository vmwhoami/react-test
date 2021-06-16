import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResult from './searchResult';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:search">
            <SearchResult />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

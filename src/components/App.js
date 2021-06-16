import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResult from './searchResult';
import ErrorPage from '../pages/ErrorPage';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:search" exact>
            <SearchResult />
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

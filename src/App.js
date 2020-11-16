import './App.css';
import MyBooks from './pages/MyBooks';
import SearchBooks from './pages/SearchBooks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <SearchBooks />
            </Route>
            <Route exact path={["/MyBooks"]}>
            <MyBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

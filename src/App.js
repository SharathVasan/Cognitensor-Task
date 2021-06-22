import "./App.css";
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/login/LoginPage";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";
import {ReactComponent as ReactLogo} from './logo.svg';

function App() {
  return (
    <UserProvider>
      <Router>
      <div className="app">
        <div className="head">
          <div>
            <ReactLogo />
          </div>
          <div>
          <ul>
            <Link to="/login" id="link">Login</Link>
            <Link to="/" id="link">Portal</Link>
          </ul>
          </div>
        </div>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
      </Router>
    </UserProvider>
  );
}

export default App;

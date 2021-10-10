import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/main';
import LoginPage from './pages/login';
import account from './pages/account'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/account" component={account} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
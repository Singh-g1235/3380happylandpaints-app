
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import SignupForm from './Components/SignupForm/SignupForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={FormContainer}></Route>
          <Route path="/home_page" exact component={HomePage}></Route>
          <Route path="/signup" exact component={SignupForm}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

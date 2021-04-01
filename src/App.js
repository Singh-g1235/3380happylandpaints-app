
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
<<<<<<< HEAD
//import SignInForm from './Components/SignInForm/SignInForm';
=======
>>>>>>> development

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={FormContainer}></Route>
          <Route path="/home_page" exact component={HomePage}></Route>
<<<<<<< HEAD
          {/* <Route path="/signup" exact component={SignInForm}></Route> */}
=======
>>>>>>> development
        </Switch>
      </Router>
    </div>
  );
}

export default App;

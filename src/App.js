
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AdminMain from './Components/AdminContainer/AdminMain/AdminMain'
//import SignInForm from './Components/SignInForm/SignInForm';


//import SignInForm from './Components/SignInForm/SignInForm';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={FormContainer}></Route>
          <Route path="/home_page" exact component={HomePage}></Route>

          {/* Route to admin module.. use url localhost:3000/admin_page to view admin module */}
          <Route path="/admin_page" exact component={AdminMain}></Route>
          {/* <Route path="/signup" exact component={SignInForm}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

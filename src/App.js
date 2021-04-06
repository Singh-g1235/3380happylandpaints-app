
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AdminMain from './Components/AdminContainer/AdminMain/AdminMain'
import withAuth from './Services/withAuth';
import EditProfile from './Components/EditProfile/EditProfile';
import ViewCart from './Components/ViewCart/ViewCart'
import UserOrdersContainer from './Components/UserOrdersContainer/UserOrdersContainer';
import Navbar from './Components/Navbar/Navbar';
import LogoutForm from './Components/LoginForm/LogoutForm';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          {/* edit_profile and edit_orders will require user authentication. */}
        <Route path="/edit_profile" exact component={withAuth(EditProfile)}></Route>
        <Route path="/edit_orders" exact component={withAuth(UserOrdersContainer)}></Route>
        <Route path="/logout" exact component={withAuth(LogoutForm)}></Route>

          <Route path="/" exact component={FormContainer}></Route>
          <Route path="/home_page" exact component={HomePage}></Route>
          <Route path="/viewCart" exact component={ViewCart}></Route>

          {/* Route to admin module.. use url localhost:3000/admin_page to view admin module */}
          <Route path="/admin_page" exact component={AdminMain}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

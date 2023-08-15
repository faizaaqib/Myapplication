import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import Login from './components/Login';
import Account from './components/Account';
import Welcome from './components/Welcome';
import {Switch,Route} from "react-router-dom"




function App() {
  return (
   <>
    <Navbaar />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
      <Route exact path="/sign" component={Account} />
      <Route exact path="/welcome" component={Welcome} />
      

    </Switch>
   
   </>
  );
}

export default App;







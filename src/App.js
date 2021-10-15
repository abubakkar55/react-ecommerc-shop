import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AllProvider from './context/AllProvider';
import NotFound from './components/NotFound/NotFound';
import ProductsPage from './pages/ProductsPage';
import LogOut from './pages/LogOut';
import PrivateRoute from './components/Private/PrivateRoute';
import ProductDetails from './pages/ProductDetails';
import OrderReview from './pages/OrderReview';
function App() {
  return (
    <div className="App">
      <AllProvider>
        <Router>
          <Announcement />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={Home}></Route>
            <Route path="/shop" component={ProductsPage}></Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/logout" component={LogOut}></Route>
            <Route path="/orderReview" component={OrderReview}></Route>

            <PrivateRoute path="/product_details/:pdId" >
              <ProductDetails />
            </PrivateRoute>
            <Route path="*" component={NotFound}></Route>

          </Switch>
          <Footer />
        </Router>
      </AllProvider>

    </div>
  );
}

export default App;
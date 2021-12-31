import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';





function App() {
  return (
    <div className="App">
       <AuthProvider></AuthProvider>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

{/*          
          <PrivateRoute path="/booking/:serviceId">
          <Header></Header>
          <Booking></Booking>
            <Footer></Footer>
           
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/manageProduct">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/review">
          <AddReviews></AddReviews>
          </Route> */}
          <Route path="/login">
            <Navigation></Navigation>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          {/* <PrivateRoute path="/ServiceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
 */}



          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        
      </Router>
   

 

    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Error from './Pages/Error/Error';
import AuthProvider from './Components/Context/AuthProvider';
import JoinUs from './Pages/JoinUs/JoinUs/JoinUs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Learner/Learner';
import Learner from './Pages/Register/Learner/Learner';
import Rider from './Pages/Register/Rider/Rider';





function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/join">
            <JoinUs></JoinUs>
          </Route> */}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register/learner">
            <Learner></Learner>
          </Route>
          <Route path="/register/rider">
            <Rider></Rider>
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
          </Route> 
          <Route path="/login">
            <Navigation></Navigation>
            <Login></Login>
            <Footer></Footer>
          </Route>
          
          <PrivateRoute path="/ServiceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
 */}



          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        
      </Router>
   
       </AuthProvider>
    

 

    </div>
  );
}

export default App;

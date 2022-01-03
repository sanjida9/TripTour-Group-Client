import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PlaceOrderHotel from "./components/PlaceOrderHotel/PlaceOrderHotel";
import NewWatch from "./components/NewWatch/NewWatch";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Pay from "./components/Pay/Pay";
import Review from "./components/Review/Review";
import Dashboard from "./Dashboard/Dashboard";

import Packages from "./components/Packages/Packages";
import Hotels from "./components/Hotels/Hotels";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Car from "./components/Car/Car";
import Flight from "./components/Flight/Flight";
import NewHotel from "./components/NewHotel/NewHotel";
import Bus from "./components/Bus/Bus";
import Attractions from "./components/Attractions/Attractions";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>

            <Route path="/hotels">
              <Hotels></Hotels>
            </Route>
            <Route path="/car">
              <Car></Car>
            </Route>
            <Route path="/bus">
              <Bus></Bus>
            </Route>
            <Route path="/flight">
              <Flight></Flight>
            </Route>
            <Route path="/attractions">
              <Attractions></Attractions>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/watch/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/hotel/:id">
              <PlaceOrderHotel></PlaceOrderHotel>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/newWatch">
              <NewWatch></NewWatch>
            </PrivateRoute>
            <PrivateRoute path="/newHotel">
              <NewHotel></NewHotel>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

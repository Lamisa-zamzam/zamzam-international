import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Book from "./Components/Dashboard/Book/Book/Book";
import Bookings from "./Components/Dashboard/Bookings/Bookings";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import GiveReview from "./Components/Dashboard/GiveReview/GiveReview";
import AddService from "./Components/Dashboard/AddService/AddService";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Payment from "./Components/Dashboard/Book/Payment/Payment/Payment";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        photoURL: "",
        isNewUser: true,
        isLoggedIn: false,
        error: "",
    });
    console.log(user.email);
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/pay">
                        <Payment />
                    </Route>
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/bookings">
                        <Bookings />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/giveReview">
                        <GiveReview />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/addService">
                        <AddService />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/makeAdmin">
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/manageServices">
                        <ManageServices />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard/book/:id">
                        <Book />
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;

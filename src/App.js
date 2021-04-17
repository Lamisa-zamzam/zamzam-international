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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51IeJOnEbOwJYaM8zeiKuT8tF911nK1hHgA9uH77BP8Atf5XymHXR3XIlI8w8QIv5P19rA3Li3bfz15bVuK0aw9dF00MnyVJpef"
);

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
                        <Elements stripe={stripePromise}>
                            <Book />
                        </Elements>
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

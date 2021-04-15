import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;

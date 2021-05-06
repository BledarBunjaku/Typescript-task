import React from "react"
import "./app.scss"
import Employees from '../components/Employees/employees'
import Companies from '../components/Companies/companies'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

 let defaultValue= ""
 
export const UserContext = React.createContext(defaultValue);



const App = () => (
        <Router>
            <div className='app-container'>
                <div className='header'>
                    <NavLink activeClassName='active' to="/" exact>Employees</NavLink>
                    <NavLink activeClassName='active' to="companies">Companies</NavLink>
                </div>
                <Switch>
                    <UserContext.Provider value="StarLabs">
                    <Route path="/" exact>
                        <Employees />
                    </Route>
                    <Route path="/companies">
                        < Companies />
                    </Route>
                    </UserContext.Provider>
                </Switch>
            </div>
        </Router >
    )
    
    export default App


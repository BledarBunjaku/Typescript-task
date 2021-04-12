
import "./app.scss"
import Employees from '../components/Employees/employees'
import Companies from '../components/Companies/companies'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"


const App = () => {
    return (
        <Router>
            <div className='app-container'>
                <div className='header'>
                    <NavLink activeClassName='active' to="/" exact>Employees</NavLink>
                    <NavLink activeClassName='active' to="companies">Companies</NavLink>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Employees />
                    </Route>
                    <Route path="/companies">
                        < Companies />
                    </Route>
                </Switch>
            </div>
        </Router >
    )
}
export default App


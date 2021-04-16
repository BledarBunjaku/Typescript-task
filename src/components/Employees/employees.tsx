import React, { useState, useEffect } from 'react'
import "./employees.scss"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from './Employee/employee'
import { UserType } from '../../types/types'
import { AppBar, Grid, makeStyles, FormControl, Input, Button } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    header: {
        height: 70,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "none",       
        padding: "0 10px 0 0"
    },
    searchBar: {
        border: "none",
        display: "flex",
        flexDirection: "row",
        width: "max-content",
        borderRadius: 3,
        backgroundColor: "white",

    },
    input: {
        all: "unset",
        border: "none",
        color: "grey"
    },
    button: {
            all: "unset",
        padding: "3px 0",
        color: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
            cursor: "pointer"
        }
})


const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6067781acecaa80c6b9639e2';



//Cfar tipi return me ba
const Employees: React.FC = (): any | JSX.Element => {

    const [user, setUser] = useState<UserType[]>()
    const [filteredUser, setFilteredUser] = useState(
        {
            input: "",
            Searched: "",
            filteredArr: [{
                email: "",
                firstName: "",
                id: "",
                lastName: "",
                picture: "",
                title: ""
            }]
        })


    useEffect(() => {
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(response => {
                console.log("userDataApi", response.data.data)
                const arr = response.data.data.slice(0, 10)
                setUser([...arr])
            })
            .catch(console.error)
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredUser({
            ...filteredUser,
            input: e.target.value
        })
    }

    const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!filteredUser.input) {
            return
        }

        // filtered by firstName or userName
        if (user) {
            const newArr = user.filter(user => (user.firstName.includes(filteredUser.input) || user.lastName.includes(filteredUser.input)))
            setFilteredUser({
                ...filteredUser,
                filteredArr: [...newArr],
                Searched: filteredUser.input
            })
        }
    }

    // All users
    let allUsersData
    if (user) {
        allUsersData = user.map((user, idx) => {
            return <Card
                key={idx}
                name={user.firstName}
                lName={user.lastName}
                email={user.email}
                image={user.picture}
            />
        })
    }



    // Filtered user
    let filteredUserData
    if (filteredUser.filteredArr[0].firstName) {
        filteredUserData = filteredUser.filteredArr.map((user, idx) =>
            <Card
                key={idx}
                name={user.firstName}
                lName={user.lastName}
                email={user.email}
                image={user.picture}
            />)
    }

    console.log("filtered", filteredUserData)

    const classes = useStyles();

    return (
        <div className='employees-container'>            
            <AppBar className={classes.header} position="static">
                <FormControl className={classes.searchBar }  >
                    <input onChange={(e) => { handleChange(e) }} value={filteredUser.input} type="text" className={classes.input } placeholder="Search..." />
                    <Button onClick={(e) => { handleSearch(e)}} className={classes.button} disableRipple ><SearchIcon/></Button>
                </FormControl>
            </AppBar>
            <Grid container>
                {
                    (filteredUserData && (filteredUser.input === filteredUser.Searched)) ?
                        filteredUserData :
                        allUsersData
                }
            </Grid>
        </div>
    )
}

export default Employees
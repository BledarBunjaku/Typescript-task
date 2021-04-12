import React, { useState, useEffect } from 'react'
import "./employees.scss"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from './Employee/employee'
import { UserType } from '../../types/types'


const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6067781acecaa80c6b9639e2';



//Cfar tipi returm me ba
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

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
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

    return (
        <div className='employees-container'>
            <form onSubmit={(e) => { handleSearch(e) }}>
                <input onChange={(e) => { handleChange(e) }} value={filteredUser.input} placeholder="Search..." />
                <button type="submit">{<FontAwesomeIcon icon={faSearch} style={{ color: "#777e8e" }} />}</button>
            </form>
            <div className='employees-wrapper'>
                {
                    (filteredUserData && (filteredUser.input === filteredUser.Searched)) ?
                        filteredUserData :
                        allUsersData
                }
            </div>
        </div>
    )
}

export default Employees
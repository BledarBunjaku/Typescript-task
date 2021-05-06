import React, { useState, useEffect } from "react";
import "./employees.scss";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from "./Employee/employee";
import { UserType } from "../../types/types";
import {
  AppBar,
  Grid,
  makeStyles,
  FormControl,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import {connect} from "react-redux"
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "none",
    padding: "0 10px 0 0",
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
    color: "grey",
  },
  button: {
    all: "unset",
    padding: "3px 0",
    color: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "6067781acecaa80c6b9639e2";

const Employees: React.FC = (props): any | JSX.Element => {
  let initialFilteredUser = {
    input: "",
    Searched: "",
    filteredArr: [
      {
        email: "",
        firstName: "",
        id: "",
        lastName: "",
        picture: "",
        title: "",
      },
    ],
  };
  const [user, setUser] = useState<UserType[]>();
  const [filteredUser, setFilteredUser] = useState(initialFilteredUser);
  console.log("userssssss", user);

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  // const body = (
  //     <div style={modalStyle} className={classes.paper}>
  //         <h2 id="simple-modal-title">Text in a modal</h2>
  //         <p id="simple-modal-description">
  //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //           </p>
  //         {/* <SimpleModal /> */}
  //     </div>
  // );

  const ModalBody = () => (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <SimpleModal /> */}
    </div>
  );

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
      .then((response) => {
        console.log("userDataApi", response.data.data);
        const arr = response.data.data.slice(0, 10);
        setUser([...arr]);
      })
      .catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredUser({
      ...filteredUser,
      input: e.target.value,
    });
  };

  Math.floor(Math.random() * 10 + 1);

  const addCard = () => {
    if (user) {
      let newArr = [...user, user[Math.floor(Math.random() * 10 + 1)]];
      // user.push(newArr)
      setUser(newArr);
    }
  };

  const changeName = (id: string) => {
    let enteredName = prompt("Please enter your name");
    console.log("enteredName", enteredName);

    if (enteredName) {
      if (user) {
        let newArr = [...user];
        let objIndex = newArr.findIndex((user) => user.id === id);
        newArr[objIndex].firstName = enteredName;
        setUser(newArr);
      }
    }
  };

  const deleteHandler = (id: string) => {
    let newArr;
    if (user) {
      newArr = user.filter((user) => user.id !== id);
    }
    setUser(newArr);
  };

  console.log("props", props);

  const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!filteredUser.input) {
      return;
    }

    // filtered by firstName or userName
    if (user) {
      const newArr = user.filter(
        (user) =>
          user.firstName.includes(filteredUser.input) ||
          user.lastName.includes(filteredUser.input)
      );
      setFilteredUser({
        ...filteredUser,
        filteredArr: [...newArr],
        Searched: filteredUser.input,
      });
    }
  };

  // All users
  let allUsersData;
  if (user) {
    allUsersData = user.map((user, idx) => {
      return (
        <Card
          key={idx}
          name={user.firstName}
          lName={user.lastName}
          email={user.email}
          image={user.picture}
          deleteHandler={deleteHandler}
          id={user.id}
          changeName={changeName}
          editUser={editUser}
        />
      );
    });
  }

  function editUser(x: any, y: any, id: any) {
    if (user) {
      let newArr = [...user];
      let objIndex = newArr.findIndex((user) => user.id === id);
      newArr[objIndex].firstName = x;
      newArr[objIndex].email = y;
      setUser(newArr);
    }
  }

  // Filtered user
  let filteredUserData;
  if (filteredUser.filteredArr[0].firstName) {
    filteredUserData = filteredUser.filteredArr.map((user, idx) => (
      <Card
        key={idx}
        name={user.firstName}
        lName={user.lastName}
        email={user.email}
        image={user.picture}
        deleteHandler={deleteHandler}
        id={user.id}
        changeName={changeName}
        editUser={editUser}
      />
    ));
  }

  console.log("filtered", filteredUserData);

  return (
    <div className="employees-container">
      <button onClick={addCard}>Add new Card</button>
      <AppBar className={classes.header} position="static">
        <FormControl className={classes.searchBar}>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={filteredUser.input}
            type="text"
            className={classes.input}
            placeholder="Search..."
          />
          <Button
            onClick={(e) => {
              handleSearch(e);
            }}
            className={classes.button}
            disableRipple
          >
            <SearchIcon />
          </Button>
        </FormControl>
      </AppBar>
      <Grid container>
        {filteredUserData && filteredUser.input === filteredUser.Searched
          ? filteredUserData
          : allUsersData}
      </Grid>
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalBody />
        </Modal>
      </div>
    </div>
  );
};

// const mapStateToProps = (state: { filteredUser: any }) => ({

//     filteredUser: state.filteredUser

// })

// export default connect(mapStateToProps)(Employees)
export default Employees;

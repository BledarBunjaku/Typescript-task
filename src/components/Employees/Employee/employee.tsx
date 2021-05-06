import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import { EmployeeProps } from "../../../types/types";
import Modal from "@material-ui/core/Modal";
import { UserContext } from "../../../container/App";
import { InputRef } from "./inputForwardRef";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 450,
      margin: 5,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    divParagraph: {
      height: "90px",
    },
    paragraphSize: {
      verticalAlign: "middle",
      paddingRight: "10px",
      color: "grey",
      fontSize: "8px",
    },
    footeCard: {
      height: "50px",
      borderTop: "1px solid #d3d3d3",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    messageButton: {
      padding: 5,
      fontWeight: "bold",
      color: "white",
      backgroundColor: "#feb902",
      border: "none",
      borderRadius: 3,
      cursor: "pointer",
    },
    messageProfile: {
      padding: 5,
      fontWeight: "bold",
      backgroundColor: "white",
      color: "grey",
      border: "1px solid grey",
      borderRadius: 3,
      cursor: "pointer",
    },
    contactInfo: {
      color: "grey",
      fontSize: 13,
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const Company: React.FC<EmployeeProps> = ({
  id,
  name,
  lName,
  email,
  image,
  deleteHandler,
  changeName,
  editUser,
}) => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, []);

  const firstKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userEmailRef.current) {
      userEmailRef.current.focus();
    }
  };
  const secondKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && submitRef.current) {
      submitRef.current.focus();
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <input
        type="text"
        placeholder="Enater your name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enater your email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <button
        onClick={() => {
          editUser(user.name, user.email, id);
          handleClose();
        }}
      >
        Save Changes
      </button>
    </div>
  );

  return (
    <Grid justify="center" container item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <button onClick={() => deleteHandler(id)}>X</button>
        <button onClick={() => changeName(id)}>Edit Name</button>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img
                src={image}
                alt="thumbmnail"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={lName}
        />

        <InputRef
          ref={userNameRef}
          type="text"
          placeholder="Enter Name"
          onKeyDown={firstKeyDown}
        />
        <InputRef
          ref={userEmailRef}
          type="text"
          placeholder="Email Name"
          onKeyDown={secondKeyDown}
        />
        <button ref={submitRef}>Submit</button>

        <div>
          {/* <button type="button" onClick={handleOpen}>
            Open Modal
      </button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>

        <CardContent className={classes.divParagraph}>
          <UserContext.Consumer>
            {(value) => {
              return (
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like {value}
                </Typography>
              );
            }}
          </UserContext.Consumer>
        </CardContent>
        <CardContent>
          <div>
            <span className={classes.paragraphSize}>
              <MailOutlineIcon fontSize="small" />
            </span>
            <span className={classes.contactInfo}>{email}</span>
          </div>
          <div>
            <span className={classes.paragraphSize}>
              <InstagramIcon fontSize="small" />
            </span>
            <span className={classes.contactInfo}>
              {name}.{lName}
            </span>
          </div>
        </CardContent>
        <CardContent className={classes.footeCard}>
          <div>
            {" "}
            <button className={classes.messageButton}>Message</button>{" "}
            <button className={classes.messageProfile}>Profile</button>{" "}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Company;

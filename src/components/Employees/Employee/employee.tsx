import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container'
import { EmployeeProps } from '../../../types/types'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        maxWidth: 450,
          margin: 5
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        divParagraph: {
            height: "90px"
        },
        paragraphSize: {
            verticalAlign: "middle",
            paddingRight: "10px",
            color: "grey",
            fontSize: "8px"
        },
        footeCard: {
            height: "50px",
            borderTop: "1px solid #d3d3d3",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        messageButton: {
            padding: 5,
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#feb902",
            border: "none",
            borderRadius: 3,
            cursor: "pointer"
        },
        messageProfile: {
            padding: 5,
            fontWeight: "bold",
            backgroundColor: "white",
            color: "grey",
            border: "1px solid grey",
            borderRadius: 3,
            cursor: "pointer"
        },
        contactInfo: {
            color: "grey",
            fontSize: 13
        }
  }),
);

const Company: React.FC<EmployeeProps> = (props) => {
     
    const classes = useStyles();

  return (
      <Grid justify="center" container item xs={12} sm={6}  md={4}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={props.image} style={{ width: "100%", height: "100%" }}></img>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.name}
            subheader={props.lName}
          />
          <CardContent className={classes.divParagraph}>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
          </CardContent>
          <CardContent >
            <div> 
                <span className={classes.paragraphSize} >
                  <MailOutlineIcon fontSize="small" />
              </span>
              <span className={classes.contactInfo } >                
                {props.email}
              </span>
            </div>
              <div>
              <span className={classes.paragraphSize}>
                        <InstagramIcon fontSize="small" />
                </span>
                      <span className={classes.contactInfo }>
                          {props.name}.{props.lName}
                </span>
              </div>
            </CardContent>
          <CardContent className={classes.footeCard}>
                <div><button className={classes.messageButton}>Message</button> <button className={classes.messageProfile}>Profile</button> </div>
          </CardContent>          
        </Card>
      </Grid>
  )
 }

 export default Company




// import "./employee.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { EmployeeProps } from '../../../types/types'
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({

//     button: {
//         height: "25px",
//         width: "66px",
//         padding: "1px 6px",
//         margin: "0 5px",
//         border: "none",
//         borderRadius: "3px",
//         color: "white",
//         cursor: "pointer",
//         backgroundColor: "#feb902",
//         fontSize: "13px",
//         textTransform: "capitalize",
//         '&:hover': {
//             color: "white",
//             backgroundColor: "#feb902",
//             border: "2px solid grey !important",
//         },
//         rippleVisible: "none"
//     }
// })




// const Employee: React.FC<EmployeeProps> = (props) => {

//     let classes = useStyles();

//     return <><div className='card'>
//         <div className='employee-wrapper'>
//             <div className='employee-personal-info'>
//                 <div className='employee-image'>
//                     <img src={props.image} alt='avatar' />
//                 </div>
//                 <div className='employee-name'>
//                     <p className='name'>{props.name}</p>
//                     <p className='position'>{props.lName}</p>
//                 </div>
//             </div>
//             <div className='employee-bio'>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                 sed do eiusmod tterempor incididunnt ut elit labore.{props.lName + props.name}
//                 </p>
//             </div>
//             <div className='employee-contact-info'>

//                 <p><span><FontAwesomeIcon icon={faEnvelope} /></span>{props.email}</p>
//                 <p><span><FontAwesomeIcon icon={faInstagram} /></span>{props.name}.{props.lName}</p>
//             </div>
//             <div className='contact-employee'>
//                 <div>
//                     {/* <button className='message'>Message</button> */}
//                     <Button className={classes.button} disableRipple>Message</Button>
//                     <button>Profile</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
// }

// export default Employee
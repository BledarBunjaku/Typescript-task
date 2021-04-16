import React, { useState} from "react"
import { Theme, Grid, Container } from "@material-ui/core"
import { makeStyles, createStyles } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { ChildProps } from '../../../types/types'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




//Modal style

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

//Modal style






const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    //     paper: {
    //   position: 'absolute',
    //   width: 400,
    //   backgroundColor: theme.palette.background.paper,
    //   border: '2px solid #000',
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
    // },
        container: {
            background: "white",
            display: "flex",
            margin: "10px auto",
            paddingLeft: "10px",
            boxShadow: " 0 0 7px #b7b7b7",
            borderRadius: 4,            
            [theme.breakpoints.down('xs')]: {
                flexDirection: "column",
                maxWidth: "400px !important"               
    }
        },
        companyLogoContainer: {
            padding: 5,
            display: "flex",
            justifyContent: "space-around",
            [theme.breakpoints.down('xs')]: {
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                paddingTop: 10
    }
        },
        companyLogoRank: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& div": {
                width: 25,
                height: 25,
                borderRadius: "50%",
                border: "9px solid #ccd2d7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#eee",
                backgroundColor: "black"
            }
        },
        companyLogoImage: {
            paddingTop: 15,
            width: 110,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& div": {
                width: 60,
                height: 60,
                "& img": {
                    width: "100%",
                    height: "100%"
                }
                
            },
            "& span": {
                fontSize: 13,
                textAlign: "center",                
                },
            [theme.breakpoints.down('xs')]: {
                flexDirection: "row",
                width: "max-content",
                padding: 0,
                "& span": {
                    marginLeft: 10
                },
                "& div": {
                    width: 35,
                    height: 35
                }
            }
        },
        companyMenu: {
            padding: 5,
            "& div": {
                maxWidth: 240,
                backgroundColor: "white",
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "22px 15px 15px 0",
                "& p": {
                    margin: 0
                },
                "& h3": {
                    border: "1px dashed black",
                    width: "100%",
                    height: 35,
                    padding: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: 0
                },
                [theme.breakpoints.down('xs')]: {
                    maxWidth: "100%",
                    margin: 0
    }
            }
        },
        companyEffort: {
            backgroundColor: "white",
            padding: "5px 15px 5px 10px",
            marginLeft: "15%",            
            "& p": {
                margin: 0,
                "& span": {
                    verticalAlign: "middle",
                    paddingRight: 5,
                    color: "green"
                }
            },
            [theme.breakpoints.down('xs')]: {
                width: "100%",
                margin: 0
    }
        },
        companyWebsite: {
            width: "180px",
            minWidth: "50px",
            height: "80%",
            padding: 5,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",            
            "& p": {
                    margin: 0,
                textAlign: "center",                
                fontWeight: "bold",
                paddingBottom: 5
            },
            "& button": {
                backgroundColor: "#ffb900",
                width: "100%",
                height: 40,
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                border: "none"
            },
            [theme.breakpoints.down('xs')]: {
                width: "100%",
                "& button": {
                    height: 48
                }
            },
             modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
    },
    
        }
    }));


const Company: React.FC<ChildProps> = (props) => {
    
    let classes = useStyles();


  



    let type
    if (props.type) {
        let type1 = props.type.toString();
        type = type1.toUpperCase();
    }

    // console.log("props", props.index)

    return(
        <Container maxWidth="lg" className={classes.container}>
             <Grid>
                    <div className={classes.companyLogoContainer}>
                    <div className={classes.companyLogoRank}><div>{props.rank}</div></div>
                    <div className={classes.companyLogoImage}>
                        <div><img src={props.image} alt="img"></img></div>
                        <span>{type ? type : "-"}</span>
                    </div>
                </div>
                </Grid>
            <Grid container>               
                <Grid item xs={12} sm={4} ><div className={classes.companyMenu}><div><h3>{props.menu}</h3><p>Terms</p></div></div></Grid>
                <Grid container alignItems="center" justify="flex-start" xs={12} sm={4} ><div className={classes.companyEffort}><div>
                    <p><span><DoneIcon/></span>{props.source}</p>
                    <p><span><DoneIcon/></span>List2</p>
                    <p><span><DoneIcon/></span>List3</p>
                </div></div></Grid>
                <Grid container alignItems="flex-end" justify="center" xs={12} sm={4} ><div className={classes.companyWebsite}>
                    <p>{props.menu}</p>
                    <button onClick={() => props.addOrder((props.rank - 1))} >ORDER NOW</button>                    
                    
                </div></Grid>
            </Grid>
        </Container>
    )
}
export default Company





// import "./company.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { ChildProps } from '../../../types/types'


// const company: React.FC<ChildProps> = (props) => {

//     //Country origin toUpperCase
//     let type
//     if (props.type) {
//         let type1 = props.type.toString();
//         type = type1.toUpperCase();
//     }

//     return <div className='company-container'>
//         <div className='company-info'>
//             <div className='company-rank'>
//                 <div className='rank'>{props.rank}</div>
//             </div>
//             <div className='company-logo'>
//                 <div className='logo'>
//                     <div className='image'><img src={props.image} alt="logo" /></div>
//                     <div className='logo-name'><h3>{type ? type : "-"}</h3></div>
//                 </div>
//             </div>
//         </div>
//         <div className='company-menu '>
//             <div>
//                 <h3>{props.menu}</h3>
//                 <p>Terms {"&"} Conditions</p>
//             </div>
//         </div>
//         <div className='company-efforts'>
//             <div>
//                 <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>{props.source}</p>
//                 <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>Delicious</p>
//                 <p><span><FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /></span>Free Delivery</p>
//             </div>
//         </div>
//         <div className='company-website'>
//             <div>
//                 <p>{props.menu}</p>
//                 <button>Order Now</button>
//             </div>
//         </div>
//     </div>
// }

// export default company
import { useState, useEffect } from 'react'
import "./companies.scss"
import axios from 'axios'
import Company from './Company/company'
import { RecipeType } from "../../types/types"
import { Theme, makeStyles, createStyles, Modal } from "@material-ui/core"

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
    paper: {
      position: 'absolute',
      minWidth: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


const APP_ID = 'efd4ae1f';
const APP_KEY = '8ed313453c30899dd143812aec57aca9';

const Main = () => {
  const classes = useStyles();


  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [orders, setOrders] = useState<number[]>([]);


  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  console.log("recipes", recipes)
  console.log("orders", orders)

  const addOrder = (idx: number) => {
    let newArray = [...orders]
    newArray.push(idx)
    setOrders([...newArray])
  }


  let orderFIltered: any[] = []

  const handleOpen = () => {
    setOpen(true);

    // let filtered = recipes.filter((recipe, idx) => {

    //     let rep =  orders.map((order,index)  => idx === index? true : false)
    //      return rep
    //     // idx === orders[idx]
    //      }

    // )        
    // console.log("filtered", filtered)


    console.log("filtered", orderFIltered)
    orders.forEach((order, idx) => recipes.forEach((recipe, index) => {

      if (index === idx)
        orderFIltered.push(...orderFIltered, { ...recipe })
    }
    ))

  }

  // const ordersView = orderFIltered.map((recipe, idx) => {
  //   return <Company
  //     key={idx}
  //     image={recipe.recipe.image}
  //     menu={recipe.recipe.label}
  //     rank={idx + 1}
  //     type={recipe.recipe.cuisineType}
  //     source={recipe.recipe.source}
  //     addOrder={addOrder}
  //     index={idx}
  //   />
  // })




  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <div id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
           {
          orderFIltered.map((recipe, idx) => {
            return <Company
              key={idx}
              image={recipe.recipe.image}
              menu={recipe.recipe.label}
              rank={idx + 1}
              type={recipe.recipe.cuisineType}
              source={recipe.recipe.source}
              addOrder={addOrder}
              index={idx}
            />
          })

        }
      </div>
    </div>
  );



  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => {
        console.log("responseEdamamApi", response.data.hits)
        setRecipes([...response.data.hits])
      })
  }, [])



  // const showOrders = () => {

  //     }


  console.log("ordersss", orders)

  return (
    <div className='companies-container'>
      {recipes.map((recipe, idx) => {
        return <Company
          key={idx}
          image={recipe.recipe.image}
          menu={recipe.recipe.label}
          rank={idx + 1}
          type={recipe.recipe.cuisineType}
          source={recipe.recipe.source}
          addOrder={addOrder}
          index={idx}
        />
      })}

      <div>
        <button type="button" onClick={handleOpen}>
          View Orders
      </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  )
}
export default Main


import { useState, useEffect } from 'react'
import "./companies.scss"
import axios from 'axios'
import Company from './Company/company'
import { RecipeType } from "../../types/types"

const APP_ID = 'efd4ae1f';
const APP_KEY = '8ed313453c30899dd143812aec57aca9';

const Main = () => {

    //Pyetje qysh me i selektu vetem pjesen e responsit qe na intereson
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    useEffect(() => {
        axios.get(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => {
                console.log("responseEdamamApi", response.data.hits)
                setRecipes([...response.data.hits])
            })
    }, [])

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
                />
            })}
        </div>
    )
}
export default Main


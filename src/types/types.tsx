export interface ChildProps {
    key: number
    image: string
    menu: string
    rank: number
    type: string
    source: string
    addOrder: (param: number) => any
    index: number
}

export interface EmployeeProps {
    image: string
    name: string
    lName: string
    key: number
    email: string
    deleteHandler: any
    changeName: any
    id: string
    editUser: any
}

export interface UserType {
    email: string
    firstName: string
    id: string
    lastName: string
    picture: string
    title: string
}

interface RecipeTypes {
    calories: number
    cautions: string[]
    cuisineType: string
    dietLabels: string[]
    digest: any
    dishType: string[]
    healthLabels: string[]
    image: string
    ingredientLines: string[]
    ingredients: any
    label: string
    mealType: string[]
    shareAs: string
    source: string
    totalDaily: any
    totalNutrients: any
    totalTime: number
    totalWeight: number
    uri: string
    url: string
    yield: number
}


export interface RecipeType {
    bookmarked: false
    bought: false
    recipe: RecipeTypes
}


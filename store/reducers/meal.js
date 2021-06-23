import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meal";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        console.log('removed')
        const updatedMeals = [...state.favoriteMeals];
        updatedMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedMeals };
      } else {
        console.log('added')
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }


      case SET_FILTERS:
        const appliedFilters = action.filters
        const updatedFilteredMeals = state.meals.filter(meal=>{
            if(appliedFilters.gluten && !meal.isGlutenFree){
                return false
            }
            if(appliedFilters.vegetarian && !meal.isVegetarian){
                return false
            }
            if(appliedFilters.lactose && !meal.isLactoseFree){
                return false
            }
            if(appliedFilters.vegan && !meal.isVegan){
                return false
            }
            return true
        })
     return {...state, filteredMeals: updatedFilteredMeals}

    default:
      return state;
  }
};

export default mealReducer;

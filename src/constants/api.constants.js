export const BASE_API_URL = "https://api.spoonacular.com/recipes/";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const RECIPES_NUMBER = "number=100";
export const SEARCH_ENDPOINT = `complexSearch?${RECIPES_NUMBER}&addRecipeInformation=true&fillIngredients=true`;
export const POPULAR_ENDPOINT = `random?${RECIPES_NUMBER}`;

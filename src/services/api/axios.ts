import axios from 'axios';
import { Recipe } from '../../interfaces/api-recipes.interface'

export const getRecipes = () => {
  return axios.get<Recipe[]>('https://api-receitas-pi.vercel.app/receitas/todas')
    .then(res => res.data);
}

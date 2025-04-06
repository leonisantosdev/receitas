import axios from 'axios';
import { Recipe } from '../../interfaces/apiRecipes.interface'

export const getRecipes = async ( offset: number, limit: number,): Promise<Recipe[]> => {
  const response = await axios.get<Recipe[]>('https://api-receitas-pi.vercel.app/receitas/todas')
  const data = response.data;
  return data.slice(offset, limit);
}
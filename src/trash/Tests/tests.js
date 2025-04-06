import axios from 'axios';

export const getRecipes = () => {
  return axios.get('https://api-receitas-pi.vercel.app/receitas/todas')
    .then((res) => {
      // console.log(res.data[0].IngredientesBase)
      console.log(res.status)
    });
}

getRecipes()
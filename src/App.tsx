import { CardsRecipes } from "./components/CardsRecipes/CardsRecipes";
import { Header } from "./components/Header/Header";
import { useEffect, useState } from "react";
import { getRecipes } from "./services/api/axios";
import { Recipe } from "./interfaces/apiRecipes.interface";

export function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipes = async () => {
      try {
        const data = await getRecipes(0, 8);
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };

    recipes();
  }, []);

  return (
    <>
      <Header />
      <main>
        {recipes.map((recipe) => (
          <CardsRecipes
            link_imagem={recipe.link_imagem}
            receita={recipe.receita}
            tipo={recipe.tipo}
          />
        ))}
      </main>
    </>
  )
}

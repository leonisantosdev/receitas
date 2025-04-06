import style from "./CardsRecipes.module.css";
import { Clock, Users } from "lucide-react";
import { Recipe } from "../../interfaces/apiRecipes.interface";
import { Button } from "../Button/Button";

export function CardsRecipes({ link_imagem, receita, tipo }: Recipe) {

  return (
    <>
      <div className={style.card}>
        <div className={style.containerImg}>
          <img src={link_imagem} />
        </div>
        <div className={style.containerText}>
          <h2>{receita}</h2>
          <p>{tipo}</p>

          <div className={style.containerSpans}>
            <span>
              <Clock size={12} /> 45 Min
            </span>
            <span>
              <Users size={12} /> 4 Porções
            </span>
            <span>Intermediário</span>
          </div>
        </div>
        <Button
        title="Ver Receita"
        />
      </div>
    </>
  );
}

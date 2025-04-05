import style from './CardsRecipes.module.css'
import img from '../../assets/imgs/frango-agri-doce-rodizio.jpg'
import { Clock, Users } from 'lucide-react'

export function CardsRecipes() {

  return (
    <div className={style.card}>

      <div className={style.containerImg}>
        <img src={img} />
      </div>
      <div className={style.containerText}>
        <h2>Massa Caseira com Ervas</h2>
        <p>Uma massa simples e elegante com ervas frescas</p>

        <div className={style.containerSpans}>
          <span><Clock /> 45 Min</span>
          <span><Users /> 4 Porções</span>
          <span>Intermediário</span>
        </div>
      </div>
      <div className={style.containerButton}>
        <button>Ver Receita</button>
      </div>
    </div>
  )
}
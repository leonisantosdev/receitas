import style from './Header.module.css'

export function Header() {
  return (
    <div className={style.containerTextHeader}>
      <h1>Minhas Receitas</h1>
      <p>Uma coleção de receitas deliciosas para todas as ocasiões. Encontre inspiração para suas próximas refeições.</p>
    </div>
  )
}

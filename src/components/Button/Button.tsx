import style from './Button.module.css'

type ButtonProps = {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <div className={style.containerButton}>
      <button>{title}</button>
    </div>
  )
}
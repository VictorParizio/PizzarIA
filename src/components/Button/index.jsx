import './styles.css'

export const Button = ({styleType, children}) => {
  return (
    <button className={styleType}>{children}</button>
  )

}
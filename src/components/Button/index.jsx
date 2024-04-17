import './styles.css'

export const Button = ({variant, children}) => {
  return (
    <button className={variant}>{children}</button>
  )

}
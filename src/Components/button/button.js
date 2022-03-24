import './button.css'

const Button = ({name, color}) => {


    return (
        <button className={color}>{name}</button>
    )
}

export default Button
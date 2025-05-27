import './Header.css'

const Header = ({heading} : {heading : string}) => {
    return (
        <header className="heading"><h1>{heading}</h1></header>
    )
}

export default Header
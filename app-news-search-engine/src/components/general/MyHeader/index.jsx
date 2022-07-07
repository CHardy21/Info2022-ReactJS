import logo from '../../../logo.svg';
import "./MyHeader.css"

const MyHeader = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p> News Search Engine </p>
        </header>
    )
}

export default MyHeader;
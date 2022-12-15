import { Link } from "react-router-dom"
import logo from "../logo.svg"

const Header = (props) => {
	console.log("poulet props : ", props)
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				j'aime le poulet et je m'appelle {props.firstName} mon age {props.age}
			</p>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/count">Count</Link>
				</li>
				<li>
					<Link to="/characters">characters</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header

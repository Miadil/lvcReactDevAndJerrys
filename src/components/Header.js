import logo from "../logo.svg"

const Header = (props) => {
	console.log("poulet props : ", props)
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				j'aime le poulet et je m'appelle {props.firstName} mon age {props.age}{" "}
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	)
}

export default Header

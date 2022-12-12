import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"

function App() {
	return (
		<div className="App">
			<Header firstName="abdou" age="37" />
			<Header firstName="valter" age="44" />
			<Header firstName="alex" age="33" />
		</div>
	)
}

export default App

import { Routes, Route } from "react-router-dom"
import Form from "./components/Form"
import Header from "./components/Header"

import Characters from "./screens/Characters"
import Contact from "./screens/Contact"
import Count from "./components/Count"
import Home from "./screens/Home"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header firstName="abdou" age="37" />
			{/* <Form /> */}
			{/* <Count /> */}
			{/* <Home /> */}
			{/* <Contact /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/count" element={<Count />} />
				<Route path="/characters" element={<Characters />} />
			</Routes>
		</div>
	)
}

export default App

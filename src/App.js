import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"

import Home from "./screens/Home"
import Contact from "./screens/Contact"
import Count from "./components/Count"

import "./App.css"
import Form from "./components/Form"

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
			</Routes>
		</div>
	)
}

export default App

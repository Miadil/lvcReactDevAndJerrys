import { useState } from "react"

const Form = () => {
	const [firstName, setFirstName] = useState("")
	const [email, setEmail] = useState("")
	const handleClick = () => {
		console.log("Form : ---", firstName, email)
	}
	return (
		<div>
			<p>{firstName}</p>
			name :{" "}
			<input type="text" onChange={(e) => setFirstName(e.target.value)} />
			<br />
			Email :<input type="email" onChange={(e) => setEmail(e.target.value)} />
			<button onClick={handleClick}>valider</button>
		</div>
	)
}

export default Form

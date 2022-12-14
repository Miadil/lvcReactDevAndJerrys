import { useState } from "react"

const Count = () => {
	const [countBeer, setCountBeer] = useState(0)
	const [color, setColor] = useState("red")
	// 		0	 			1
	return (
		<div>
			<p>{countBeer}</p>
			<input
				type="button"
				value="+1"
				onClick={() => setCountBeer(countBeer + 1)}
			/>
			<input
				type="button"
				value="+10poulet"
				onClick={() => setCountBeer(countBeer + 10)}
			/>
			<input
				type="button"
				value="- 1"
				onClick={() => setCountBeer(countBeer - 1)}
			/>
			<p>{color}</p>
			<button onClick={() => setColor("blue")}>change Color</button>
		</div>
	)
}
export default Count

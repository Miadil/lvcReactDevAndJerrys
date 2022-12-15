import { useEffect, useState } from "react"

import "./Characters.css"
const Characters = () => {
	const [charactersInfos, setCharacterInfos] = useState([])
	useEffect(() => {
		console.log("poulet 01")
		fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharacterInfos(res))
	}, [])

	return (
		<div>
			{charactersInfos.map((characterInfo) => {
				return (
					<div>
						<img
							className="charac-img"
							src={characterInfo.image}
							alt={characterInfo.name}
						/>
						<p>{characterInfo.name}</p>
					</div>
				)
			})}
		</div>
	)
}
export default Characters

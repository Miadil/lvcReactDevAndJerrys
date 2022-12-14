import "./DisplayCard.css"

const DisplayCard = ({ photo, desc, alt }) => {
	// console.log("props DisplayCard : ", props)
	// const { photo, desc, alt } = props
	return (
		<div className="dCard-card">
			<img src={photo} alt={alt} />
			<div className="dCard-cardDesc">{desc}</div>
		</div>
	)
}

export default DisplayCard

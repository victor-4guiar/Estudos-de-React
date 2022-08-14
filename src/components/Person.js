function Person({name, ye, pfp}){
	return(
		<div>
			<img src={pfp} alt={name} />
			<h2>Name: {name}</h2>
			<h2>{ye} Years</h2>
		</div>
	);
}

export default Person;
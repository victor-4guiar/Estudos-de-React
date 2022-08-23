function SeuNome({setName}){
	return(
		<div>
			<p>Dijige tu nombre:</p>
			<input type="text" placeholder="Mi nombre es..." onChange={(e) => setName(e.target.value)} />
		</div>
	)
}

export default SeuNome;
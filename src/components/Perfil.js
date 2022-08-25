function Perfil(props){
	return(
		<div>
			<img src={props.pfp} width="600px" height="200px"/>
			<h1>{props.nome}</h1>
			<h2>{props.idade}</h2>
		</div>
	)
}

export default Perfil;
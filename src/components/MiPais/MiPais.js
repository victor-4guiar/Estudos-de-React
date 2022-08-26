import './style.css';

function MiPais({flag, nombre, descripcion, lema}){
	return(
		<div id="main">
			<img src={flag} height="230px" width="400px" />
			<h1>{nombre} ({lema})</h1>
			<h2>{descripcion}</h2>
		</div>
	)
}

export default MiPais
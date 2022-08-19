import Button from './loseventos/Button'

function Evento({numero}){
	function meuEvento(){
		console.log('Fue activado!');
	}
	
	function segundoEvento(){
		console.log('Activando el segundo evento!');
	}
	
	return(
		<div>
			<Button event={meuEvento} text="First Button" />
			<Button event={segundoEvento} text="Ilari ari ari ê" />
			<p>Clique abaixo para adicionar o evento.</p>
		</div>
	)
}

export default Evento; 
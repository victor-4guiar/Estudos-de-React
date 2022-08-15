function Evento({numero}){
	
	function myEvent(){
		console.log(`Ay sí, fue activado! ${numero}`);
	};
	
	return(
		<div>
			<p>Clique abaixo para adicionar o evento.</p>
			<button onClick={myEvent}>Ativar</button>
		</div>
	);
};

export default Evento; 
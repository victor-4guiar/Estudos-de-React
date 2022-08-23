function Saudacao({nome}){
	function gerarSaudacao(elNombre){
		return `Olá, ${elNombre}!`
	}
	
	return (
		<>{nome && <p>{gerarSaudacao(nome)}</p>}</>
	)
}

export default Saudacao;
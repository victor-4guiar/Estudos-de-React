import logo from './logo.svg';
import './App.css';
import OutraLista from './components/OutraLista';
import Box from './components/box/Box'

function App() {
	
	const myint = ['React', 'Vue', 'Angular']
	
	return(
		<div className="App">
			<h1>Renderização de Listas</h1>
			<OutraLista itens={myint} />
			<OutraLista itens="" />
			<Box />
			<Box />
			<Box />
			<Box />
		</div>
	);
}

export default App;

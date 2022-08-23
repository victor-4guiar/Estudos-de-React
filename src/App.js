import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'

function App() {
	const [nome, setName] = useState();
	
	return(
		<div className="App">
			<h1>State Lift</h1>
			<SeuNome setName={setName} />
			<Saudacao nome={nome} />
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'
import BA3 from './components/B.A.3/BA3'

function App() {
	const [nome, setName] = useState();
	
	return(
		<div className="App">
			<BA3 tema="dark" />
			<BA3 tema="light" />
		</div>
	);
}

export default App;

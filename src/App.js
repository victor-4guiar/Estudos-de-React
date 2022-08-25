import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil';

function App() {
	const [nome, setName] = useState();
	
	return(
		<div className="App">
			<Perfil pfp="https://i0.wp.com/esqrever.com/wp-content/uploads/2018/10/bolsonaro-lgbti-brasil-homofobia-policc81tica-presidente-rainbow-arco-icc81ris-2018.png?resize=750%2C629&ssl=1" nome="Victor Cobain" idade="17"/>
		</div>
	);
}

export default App;

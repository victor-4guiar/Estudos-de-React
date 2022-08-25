import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil';
import MiPais from './components/MiPais/MiPais';

function App() {
	const [nome, setName] = useState();
	
	return(
		<div className="App">
			<MiPais flag="https://cdn.mises.org.br/images/articles_thumbs/2270.png" nombre="Ascua" descripcion="Republica Social Democrata del continente Rojo como Ascua" lema="Orden y Progreso"/>
			<MiPais flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/255px-Flag_of_Uruguay.svg.png" nombre="Cuuuuuuuuuuu" descripcion="República social de Cu" lema="Cu de Apito"/>
		</div>
	);
}

export default App;

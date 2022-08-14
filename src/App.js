import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';

function App() {
	
return(
		<div className="App">
			<HelloWorld />
			<SayMyName name="Victor" />
			<SayMyName name="Laura" />
			<Person name="Victor" ye="17" pfp="https://art.ngfiles.com/thumbnails/1987000/1987081_full.webp?f1627749529" />
			<List/>
		</div>
	);
}

export default App;

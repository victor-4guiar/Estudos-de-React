import './style.css';

function BA3({tema}){
	if (tema == 'dark' || tema == 'light'){
		return(
			<div id='ventrana' class={tema}>
				<h1>Welcome to BA3!</h1>
				<h2>This is just a test.</h2>
			</div>
		)
	}else{
		return(
			<div id='error' class={tema}>
				<h1>[ERROR]</h1>
				<h2>Invalid Settings.</h2>
			</div>
		)
	}
}

export default BA3;
import axios from 'axios';
import './App.css';
import useQuery from './useQuery';

export default function App(){
	const {response} = useQuery(
		axios.get("https://foodish-api.herokuapp.com/api")
		);
	return (
	<div>
		<img src={response.image}/>
	</div>
	);
}
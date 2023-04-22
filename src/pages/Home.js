import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Home ✋</h2>
			<button onClick={() => navigate("/form")}>create my plan</button>
		</div>
	);
};

export default Home;

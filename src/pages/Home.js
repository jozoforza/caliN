import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Home ✋</h2>
			<button class="button_light" onClick={() => navigate("/form")}>
				Create my plan
			</button>
		</div>
	);
};

export default Home;

import "./App.css";
import EmailForm from "./pages/EmailForm";
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<h1>Cali Nerd</h1>
			<Routes>
				<Route exact path="/form" element={<EmailForm />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="*" element={<p>cant find that route 😄</p>} />
			</Routes>
		</div>
	);
}

export default App;

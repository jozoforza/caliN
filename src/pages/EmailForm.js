import { useState } from "react";
import emailjs from "emailjs-com";
import DragList from "../minor_components/DragList";
import "./form.css";
import caliNerd from "../assets/caliNerd.png";

const EmailForm = () => {
	const [inputs, setInputs] = useState({
		name: "",
		contact: "",
		gender: "Male",
		ageRange: "less18",
		weight: 0,
		height: 0,
		goals: [
			{ id: "1drag", content: "Gain muscle mass" },
			{ id: "2drag", content: "Gain strength" },
			{ id: "3drag", content: "Improve endurance" },
			{ id: "4drag", content: "Learn bodyweight skills" },
		],
		frequency: 1,
		note: "Hi, my workout plan should also have the following...",
	});

	const sendEmail = (inputs) => {
		const templateParams = {
			to_name: "Matis",
			to_email: "calishenicsnerd@gmail.com",
			name: inputs.name,
			contact: inputs.contact,
			message: "This is a one-time message from Cali nerd app",
			gender: inputs.gender,
			ageRange: inputs.ageRange,
			weight: inputs.weight,
			height: inputs.height,
			goal1: inputs.goals[0].content,
			goal2: inputs.goals[1].content,
			goal3: inputs.goals[2].content,
			goal4: inputs.goals[3].content,
			frequency: inputs.frequency,
			note: inputs.note,
		};

		emailjs
			.send(
				"service_qxu5pns",
				"template_rb19na6",
				templateParams,
				"R1ap0k032co2xCCui"
			)
			.then(
				(response) => {
					alert("Email sent successfully", response);
				},
				(error) => {
					alert("Failed to send email", error);
				}
			);
	};
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let hasEmptyInput = false;
		for (const key of Object.keys(inputs)) {
			console.log("note");
			if (inputs[key] === "" || (inputs[key] === 0 && key !== "note")) {
				alert("Fill " + key);
				hasEmptyInput = true;
				break; // This will break out of the loop immediately
			}
		}
		if (hasEmptyInput === true) {
			return;
		}
		sendEmail(inputs);
		//console.log(inputs);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div class="imageContainer">
				<img class="backImage" src={caliNerd}></img>
			</div>

			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>EmailForm 📑</h2>
				<label htmlFor="name">your name:</label>
				<br />
				<input
					class="text_input_light"
					name="name"
					value={inputs.name}
					onChange={(e) => handleChange(e)}
				/>
				<br />
				<label htmlFor="contact">contact:</label>
				<br />
				<input
					class="text_input_light"
					name="contact"
					value={inputs.contact}
					onChange={(e) => handleChange(e)}
				/>
				<br />
				<label htmlFor="gender">Gender:</label>
				<br />
				<input
					className="checkbox_input_light"
					checked={"Male" === inputs.gender}
					type="checkbox"
					name="gender"
					value="Male"
					onChange={(e) => handleChange(e)}
				/>
				<span>Male</span>
				<br />
				<input
					class="checkbox_input_light"
					checked={"Female" === inputs.gender}
					type="checkbox"
					name="gender"
					value="Female"
					onChange={(e) => handleChange(e)}
				/>
				<span>Female</span>
				<br />
				<input
					class="checkbox_input_light"
					checked={"Other" === inputs.gender}
					type="checkbox"
					name="gender"
					value="Other"
					onChange={(e) => handleChange(e)}
				/>
				<span>Other</span>
				<br />
				<br />
				<label htmlFor="ageRange">Age Range:</label>
				<br />
				<select
					class="select_input_light"
					value={inputs.ageRange}
					name="ageRange"
					onChange={(e) => handleChange(e)}
				>
					<option value="">Select Age Range</option>
					<option value="less18">Less than 18</option>
					<option value="18-25">18-25</option>
					<option value="25-40">25-40</option>
					<option value="40-60">40-60</option>
					<option value="65+">More than 65</option>
				</select>
				<br />
				<br />
				<label htmlFor="weight">Weight (kg):</label>
				<br />
				<input
					class="number_input_light"
					name="weight"
					type="number"
					value={inputs.weight}
					onChange={(e) => handleChange(e)}
				/>
				<br />
				<br />
				<label htmlFor="height">Height (cm):</label>
				<br />
				<input
					class="number_input_light"
					name="height"
					type="number"
					value={inputs.height}
					onChange={(e) => handleChange(e)}
				/>
				<br />
				<br />
				<DragList goals={inputs.goals} setGoals={setInputs} />
				<label htmlFor="selection">Trainings pre week:</label>
				<br />
				<select
					class="select_input_light"
					name="frequency"
					value={inputs.frequency}
					onChange={(e) => handleChange(e)}
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
				<br />
				<br />
				<label htmlFor="textBlock">Text Block:</label>
				<br />
				<textarea
					class="text_area_input_light"
					name="note"
					value={inputs.note}
					onChange={(e) => handleChange(e)}
				></textarea>
				<br />
				<br />
				<button type="submit" class="button_light">
					Submit
				</button>
			</form>
		</div>
	);
};

export default EmailForm;

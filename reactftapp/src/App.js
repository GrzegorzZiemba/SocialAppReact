import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import { auth } from "./firebase";
import Button from "./components/Buttons/Button";

function App() {
	const [username, setUserName] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signUp = (e) => {
		e.preventDefault();

		// // do stowrzenia konta wystarczy to :
		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.catch((error) => alert(error.message));

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				// dajemy return by ten promis po tym sie zakonczyl :)
				return authUser.user.updateProfile({
					displayName: username,
				});
			})

			.catch((error) => alert(error.message));
	};
	return (
		<>
			<div style={{ display: "flex", flexWrap: "nowrap" }}>
				<Navigation />
				<Main />
				<Contacts />
			</div>
			<form onSubmit={signUp}>
				<input
					name={"Username"}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>

				<input
					name={"E-mail"}
					type="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					name={"password"}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>

				<Button onClick={signUp} value="Sign Up" />
			</form>
		</>
	);
}

export default App;

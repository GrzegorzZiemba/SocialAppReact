import { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import { auth } from "./firebase";
import Button from "./components/Buttons/Button";

function App() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginOpen, setLoginOpen] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser.displayName);
				console.log(authUser.email);
				console.log(authUser);
				setUsername(authUser.displayName);
			}
		});
	}, [username]);
	return (
		<>
			<div style={{ display: "flex", flexWrap: "nowrap" }}>
				<Navigation />
				<Main />
				<Contacts />
			</div>
		</>
	);
}

export default App;

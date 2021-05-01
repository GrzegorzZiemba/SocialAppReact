import { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
	const [username, setUsername] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUsername(authUser.displayName);
			}
		});
	}, [username]);
	return (
		<>
			{" "}
			<Router>
				<div style={{ display: "flex", flexWrap: "nowrap" }}>
					<Navigation username={username} />

					<Switch>
						<Route exact path="/">
							<Main />{" "}
						</Route>

						<Route exact path="/profile">
							<Profile username={username} />
						</Route>
					</Switch>

					<Contacts />
				</div>
			</Router>
		</>
	);
}

export default App;

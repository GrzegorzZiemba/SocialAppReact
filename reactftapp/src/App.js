import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
function App() {
	return (
		<div style={{ display: "flex", flexWrap: "nowrap" }}>
			<Navigation />
			<Main />
			<Contacts />
		</div>
	);
}

export default App;

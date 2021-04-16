import "./App.css";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
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

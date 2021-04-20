import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import styles from "./Navigation.module.css";
import Button from "../elements/Buttons/Button";
import { Link } from "react-router-dom";

// https://github.com/beautifulinteractions/beautiful-react-hooks - can also be done with it :)
import { useWindowSize } from "../../hooks/resize";
import Login from "../../pages/Login";
const Navigation = () => {
	const [loginOpen, setLoginOpen] = useState(false);
	let val = false;
	const [username, setUsername] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser);
				setUsername(authUser.displayName);
			}
		});
	}, [username]);
	let size = useWindowSize();
	const logout = () => {
		console.log(`${username} logout`);
		auth.signOut();
		window.location.reload(true);
	};

	return (
		<>
			{loginOpen ? <Login loginOpen={() => setLoginOpen(val)} /> : ""}

			<nav className={styles.nav}>
				<div>
					{size[0] < 770 ? (
						<Button small={true} style={{ position: "absolute", top: "0" }}>
							X
						</Button>
					) : (
						""
					)}
					<div className={styles.divcont}>
						<Link to="/">
							<Button>MAIN</Button>
						</Link>
						<Link to="/profile">
							<Button>PROFILE </Button>
						</Link>
						<Link to="/users">
							<Button>MESSAGES </Button>
						</Link>
						<Link to="/about">
							<Button>LIKED </Button>
						</Link>
					</div>
				</div>
				<div className={styles.divcont}>
					{username ? (
						<Button onClick={logout}> SignOut </Button>
					) : (
						<Button onClick={() => setLoginOpen(true)}> LOGIN</Button>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navigation;

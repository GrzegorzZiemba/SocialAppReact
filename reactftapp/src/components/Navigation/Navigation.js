import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import styles from "./Navigation.module.css";
import Button from "../Buttons/Button";
// https://github.com/beautifulinteractions/beautiful-react-hooks - can also be done with it :)
import { useWindowSize } from "../../hooks/resize";
const Navigation = () => {
	const [username, setUsername] = useState("");
	const [loginOpen, setLoginOpen] = useState(false);
	let size = useWindowSize();
	const logout = () => {
		console.log(`${username} logout`);
		auth.signOut();
		window.location.reload(true);
	};

	useEffect(() => {
		console.log(loginOpen);
	}, [loginOpen]);

	return (
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
					<Button>MAIN</Button>
					<Button>PROFILE </Button>
					<Button>MESSAGES </Button>
					<Button>LIKED </Button>
				</div>
			</div>
			<div className={styles.divcont}>
				{username ? (
					<Button onClick={logout()}> SignOut </Button>
				) : (
					<Button onClick={() => setLoginOpen(true)}> LOGIN</Button>
				)}
			</div>
		</nav>
	);
};

export default Navigation;

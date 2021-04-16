import React from "react";
import styles from "./Navigation.module.css";
import Button from "./Button";
// https://github.com/beautifulinteractions/beautiful-react-hooks - can also be done with it :)
import { useWindowSize } from "../hooks/resize";
const Navigation = () => {
	let size = useWindowSize();
	return (
		<nav className={styles.nav}>
			<div>
				{size[0] < 600 ? (
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
				<Button>Login</Button>
			</div>
		</nav>
	);
};

export default Navigation;

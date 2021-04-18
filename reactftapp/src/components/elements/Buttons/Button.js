import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, small, onClick }) => {
	let width = small ? 40 : 150;
	return (
		<>
			<button
				onClick={onClick}
				style={{ width: `${width}px` }}
				className={styles.btn}
			>
				{children}
			</button>
		</>
	);
};

export default Button;

import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, small }) => {
	let width = small ? 40 : 150;
	return (
		<>
			<button style={{ width: `${width}px` }} className={styles.btn}>
				{children}
			</button>
		</>
	);
};

export default Button;

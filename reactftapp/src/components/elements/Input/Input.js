import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, data, setChange = () => {}, type }) => {
	return (
		<div className={styles.div}>
			<input
				className={styles.input}
				onChange={(e) => {
					setChange(e.target.value);
				}}
				maxLength="200"
				value={data}
				type={type ? type : "text"}
				required
			/>

			<label htmlFor="" className={styles.label}>
				{name}
			</label>
		</div>
	);
};

export default Input;

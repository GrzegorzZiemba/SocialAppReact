import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, data, setChange = () => {}, type, need }) => {
	return (
		<div className={styles.div}>
			<input
				className={styles.input}
				onChange={(e) => {
					if (e.target.value != "") {
						setChange(e.target.value);
					}
				}}
				maxLength="200"
				value={data}
				type={type ? type : "text"}
				required={need ? false : true}
			/>

			<label htmlFor="" className={styles.label}>
				{name}
			</label>
		</div>
	);
};

export default Input;

import React from "react";
import styles from "./RadioCheckButton.module.css";

const RadioCheckButton = ({ onClick }) => {
	return (
		<div className={styles.switch}>
			<input
				type="radio"
				className={styles.switch__input}
				name="view"
				value="login"
				onClick={(e) => {
					onClick(e.target.value);
				}}
				id="login"
			/>
			<label
				htmlFor="login"
				className={`${styles.switch__label} ${styles.switch__label__off}`}
			>
				Login
			</label>
			<input
				type="radio"
				className={styles.switch__input}
				name="view"
				value="singup"
				onClick={(e) => {
					onClick(e.target.value);
				}}
				id="singup"
			/>
			<label
				htmlFor="singup"
				className={`${styles.switch__label} ${styles.switch__label__on}`}
			>
				Sing Up!
			</label>
			<span className={styles.switch__selection}></span>
		</div>
	);
};

export default RadioCheckButton;

import React from "react";
import styles from "./Avatar.module.css";
const Avatar = ({ avatar, name, size }) => {
	return (
		<img
			style={{ width: size, height: size }}
			src={avatar}
			alt={name}
			className={styles.avatar}
		/>
	);
};

export default Avatar;

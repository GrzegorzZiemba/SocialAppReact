import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../elements/Buttons/Button";
import styles from "./Contacts.module.css";
const Contacts = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.contact}>
				<Avatar
					avatar="https://imagemed.pl/wp-content/uploads/2020/11/Imidz.jpg"
					size="3rem"
				/>
				<p className={styles.contactName}>Some NameNam eNameNa meName</p>
				<Button small={true}>
					<i class="fas fa-envelope"></i>
				</Button>
			</div>
		</div>
	);
};

export default Contacts;

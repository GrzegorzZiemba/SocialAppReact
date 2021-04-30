import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import Avatar from "../Avatar/Avatar";
import Button from "../elements/Buttons/Button";
import styles from "./Contacts.module.css";
const Contacts = () => {
	const [username, setUsername] = useState("");
	const [photo, setPhoto] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setPhoto(authUser.photoURL);
				setUsername(authUser.displayName);
			}
		});
	}, []);
	return (
		<div className={styles.mainContainer}>
			{auth.currentUser ? (
				<div className={styles.contact}>
					<Avatar
						avatar={
							photo
								? photo
								: "https://imagemed.pl/wp-content/uploads/2020/11/Imidz.jpg"
						}
						size="3rem"
					/>
					<p className={styles.contactName}>
						{username ? username : "You need to add your username"}
					</p>
					<Button small={true}>
						<i className="fas fa-envelope"></i>
					</Button>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Contacts;

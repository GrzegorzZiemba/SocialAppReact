import React, { useState, useEffect } from "react";
import Input from "../components/elements/Input/Input";
import Button from "../components/elements/Buttons/Button";
import styles from "./Login.module.css";
import { auth } from "../firebase";
import RadioCheckButton from "../components/elements/RadioCheckButton/RadioCheckButton";

const Login = ({ loginOpen }) => {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//stworzenie useState dla uzytkonwnika - czy zalogowany wpisac dopiero gdy zajme sie autoryzacja :):
	const [user, setUser] = useState(null);
	const [radio, setRadio] = useState("");

	useEffect(() => {
		console.log(`username : ${username.displayName}`);
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log("UserLoggedIN");
				setUser(authUser);
			} else {
				console.log("UserLoggedOut");
				setUser(null);
			}
		});
	}, [user, username]);

	const signUp = (e) => {
		e.preventDefault();

		// // do stowrzenia konta wystarczy to :
		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.catch((error) => alert(error.message));

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				// dajemy return by ten promis po tym sie zakonczyl :)
				return authUser.user.updateProfile({
					displayName: username,
				});
			})
			.then(loginOpen())
			.catch((error) => alert(error.message));
	};

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then(loginOpen())
			.catch((error) => alert(error.message));

		console.log(email, password);
	};
	return (
		<div className={styles.modal}>
			<div className={styles.modal__context}>
				<RadioCheckButton
					onClick={(childData) => {
						setRadio(childData);
					}}
				/>
				<form onSubmit={signUp}>
					{radio === "" || radio === "login" ? (
						<></>
					) : (
						<Input
							name={"Username"}
							setChange={(childData) => {
								setUserName(childData);
							}}
						/>
					)}
					<Input
						name={"E-mail"}
						type="email"
						setChange={(childData) => {
							setEmail(childData);
						}}
					/>
					<Input
						name={"password"}
						setChange={(childData) => {
							setPassword(childData);
						}}
					/>
					{radio === "" || radio === "login" ? (
						<Button onClick={signIn}> Login</Button>
					) : (
						<Button onClick={signUp}>Sign Up</Button>
					)}
				</form>
				<div className={styles.exit__button}>
					<Button onClick={() => loginOpen(false)}> X </Button>
				</div>
			</div>
		</div>
	);
};

export default Login;

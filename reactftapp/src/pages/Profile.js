import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Input from "../components/elements/Input/Input";
import Button from "../components/elements/Buttons/Button";
const Profile = () => {
	var userNow = auth.currentUser;
	const [image, setImage] = useState("");
	const [user, setUser] = useState("");

	const updateUser = (e) => {
		e.preventDefault();

		userNow
			.updateProfile({
				photoURL: image,
				displayName: user,
			})
			.then(function () {
				console.log(userNow.photoURL);
				console.log(userNow.displayName);
			})
			.then(() => window.location.reload(true))
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div
			style={{
				backgroundColor: "#413629",
				color: "#FFD791",
				width: "100%",
				height: "100vh",
			}}
		>
			{auth.currentUser ? (
				<form onSubmit={updateUser} id="create-course-form">
					<Input
						type="text"
						name="Provide URL for your new image"
						setChange={(childData) => {
							setImage(childData);
						}}
						value={userNow.photoURL}
						need="eeee"
					/>
					<Input
						type="text"
						name="Change you user name"
						setChange={(childData) => {
							setUser(childData);
						}}
						value={userNow.displayName}
						need="noee"
					/>

					<Button type="submit">Submit</Button>
				</form>
			) : (
				<h1>You need to login</h1>
			)}
		</div>
	);
};

export default Profile;

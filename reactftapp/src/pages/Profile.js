import React, { useState, useEffect } from "react";
import { auth, dataBase } from "../firebase";
import Input from "../components/elements/Input/Input";
const Profile = ({ username }) => {
	const [image, setImage] = useState("");

	const updateUser = (e) => {
		e.preventDefault();

		var userNow = auth.currentUser;

		userNow
			.updateProfile({
				photoURL: image,
			})
			.then(function () {
				console.log(userNow.photoURL);
				// document.getElementById("create-course-form").reset();
			})
			.catch(function (error) {
				console.log(error);
			});

		dataBase.collection("posts").update({
			photoURL: image,
		});
	};

	return (
		<div>
			<h1>Provide Image for your user!</h1>
			<form onSubmit={updateUser} id="create-course-form">
				<Input
					type="text"
					name="Enter Title"
					value={image}
					setChange={(childData) => {
						setImage(childData);
					}}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Profile;

import React, { useState } from "react";
import Button from "./elements/Buttons/Button";
import Input from "./elements/Input/Input";
import styles from "../pages/Login.module.css";

import { storage, dataBase } from "../firebase";
import firebase from "firebase";
const ImageUpload = ({ username }) => {
	const [title, setTitle] = useState("");
	const [progress, setProgress] = useState(0);
	const [image, setImage] = useState(null);
	console.log(title);
	const handleUpload = (e) => {
		// Gdyby uzytkownik jakims cudem zaznaczyl wiecej niz 1 element, tak by tylko 1 byl brany pod uwage, stad to [0]
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const uploadFile = () => {
		const upload = storage.ref(`images/${image.name}`).put(image);
		upload.on(
			"state_changed",
			(snapshot) => {
				// progress logic
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(progress);
			},
			// error when occures
			(error) => {
				alert(error.message);
			},
			//When complete get and download link which was uploaded to get it to the Images
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						dataBase.collection("posts").add({
							timestamp: firebase.firestore.FieldValue.serverTimestamp(),
							title: title,
							imgUrl: url,
							username: username,
						});
						setProgress(0);
						setTitle("");
						setImage(null);
					});
			}
		);
	};

	return (
		<div>
			<Input
				type="text"
				name="Enter Title"
				value={title}
				setChange={(childData) => {
					setTitle(childData);
				}}
			/>
			<div className={styles.image__container}>
				<input type="file" onChange={handleUpload} />

				<progress value={progress} max={100} />

				<Button onClick={uploadFile} value="Upload" />
			</div>
		</div>
	);
};

export default ImageUpload;

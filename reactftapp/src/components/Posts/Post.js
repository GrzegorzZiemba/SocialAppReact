import React, { useState, useEffect } from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./Post.module.css";
import { dataBase, auth } from "../../firebase";
import firebase from "firebase";
import Button from "../elements/Buttons/Button";
import Comments from "../Comments";

const Post = ({ userName, image, postTitle, photo, postId }) => {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");
	const [user, setUser] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser("Whaeteve");
			} else {
				setUser(null);
			}
		});
	}, [user, userName]);

	useEffect(() => {
		let unsubscribe;
		if (postId) {
			unsubscribe = dataBase
				.collection("posts")
				.doc(postId)
				.collection("comments")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setComments(snapshot.docs.map((doc) => doc.data()));
				});
		}
		return () => {
			unsubscribe();
		};
	}, [postId]);

	const postComment = (e) => {
		e.preventDefault();

		dataBase
			.collection("posts")
			.doc(postId)
			.collection("comments")
			.add({
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				text: comment,
				username: user.displayName ? user.displayName : "Unknown",
			});

		setComment("");
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.nameavatar}>
					<Avatar size={"6rem"} avatar={photo} name={postTitle} />
					<p className={styles.avataruser}>{userName}</p>
				</div>
				<div className={styles.postContainer}>
					<img className={styles.postImage} src={image} alt={postTitle} />
					{/* <div className={styles.likeOrNot}></div> */}
				</div>

				<p className={styles.postParagraph}>
					<span className={styles.postusername}>{userName} </span>
					{postTitle}
				</p>
				<div>
					{comments !== undefined && comments !== ""
						? comments.map((comment) => (
								<Comments username={comment.username} text={comment.text} />
						  ))
						: "NoCommentos Maj Friend"}
				</div>

				{user ? (
					<form onSubmit={postComment}>
						<input
							style={{
								width: "90%",
								backgroundColor: "#9c6615",
								height: "2rem",
								color: "white",
								border: "2px solid white",
							}}
							type="text"
							placeholder=""
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
						<Button
							type="submit"
							disable={!comment}
							style={{ marginBottom: "3rem" }}
						>
							{" "}
							Add Comment{" "}
						</Button>
					</form>
				) : (
					"Notc"
				)}
			</div>
		</>
	);
};

export default Post;

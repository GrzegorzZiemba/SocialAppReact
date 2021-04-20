import React, { useState, useEffect } from "react";
import Post from "./Post";
import { auth } from "../../firebase";
import ImageUpload from "../ImageUpload";
import Button from "../elements/Buttons/Button";

const Posts = ({ posts }) => {
	const [username, setUsername] = useState("");
	const [addItem, setAddItem] = useState(false);
	const [photo, setPhoto] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser.displayName);
				console.log(authUser.email);
				console.log(authUser);
				setUsername(authUser.displayName);
				setPhoto(authUser.photoURL);
			}
		});
	}, [username]);
	return (
		<>
			{username ? (
				<>
					{addItem ? <ImageUpload username={username} photoURL={photo} /> : ""}
					<Button onClick={() => setAddItem(!addItem)}>
						{!addItem ? "Create Post" : "Hide"}
					</Button>{" "}
				</>
			) : (
				""
			)}

			{posts.map(({ post, id }) => (
				<Post
					key={id}
					postId={id}
					userName={username}
					photo={post.photoURL}
					image={post.image}
					avatar={post.avatar}
					postTitle={post.postTitle}
				/>
			))}
		</>
	);
};

export default Posts;

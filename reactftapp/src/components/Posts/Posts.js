import React, { useState, useEffect } from "react";
import Post from "./Post";
import { auth } from "../../firebase";
import ImageUpload from "../ImageUpload";
import Button from "../elements/Buttons/Button";

const Posts = ({ posts }) => {
	const [username, setUsername] = useState("");
	const [addItem, setAddItem] = useState(false);
	const [photo, setPhoto] = useState("");
	const [uid, setUid] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setPhoto(authUser.photoURL);
				setUid(authUser.uid);
				setUsername(authUser);
			}
		});
	}, [username]);
	return (
		<>
			{username ? (
				<>
					{addItem ? (
						<ImageUpload uid={uid} username={username} photoURL={photo} />
					) : (
						""
					)}
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
					userName={post.userName}
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

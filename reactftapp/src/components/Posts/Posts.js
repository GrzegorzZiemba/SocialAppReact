import React from "react";
import Post from "./Post";
// import { dataBase } from "../../firebase";
import ImageUpload from "../ImageUpload";

const Posts = ({ posts }) => {
	return (
		<>
			<ImageUpload />
			{posts.map(({ post, id }) => (
				<Post
					key={id}
					postId={id}
					userName={post.userName}
					image={post.image}
					avatar={post.avatar}
					postTitle={post.postTitle}
				/>
			))}
		</>
	);
};

export default Posts;

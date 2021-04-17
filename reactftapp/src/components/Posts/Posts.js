import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
	return (
		<>
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

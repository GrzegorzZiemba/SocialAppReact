import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</>
	);
};

export default Posts;

import React from "react";

const Post = ({ post }) => {
	return (
		<>
			<div
				style={{
					margin: "20px auto",
					width: "500px",
					minHeight: "350px",
					backgroundColor: "#9F7833",
					overflow: "hidden",
				}}
			>
				<p>{post.postTitle}</p>
				<img
					src={post.image}
					alt={post.postTitle}
					style={{ objectFit: "contain", width: "80%", borderRadius: "20px" }}
				/>
			</div>
		</>
	);
};

export default Post;

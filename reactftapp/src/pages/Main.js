import React, { useState } from "react";
import Posts from "../components/Posts";

const Main = () => {
	const [posts, setPosts] = useState([
		{
			postTitle: "Tytul",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
		},
	]);
	return (
		<div
			style={{ backgroundColor: "#413620", color: "#FFD791", width: "100%" }}
		>
			<Posts posts={posts} />
		</div>
	);
};

export default Main;

import React, { useState } from "react";
import Posts from "../components/Posts";

const Main = () => {
	const [posts, setPosts] = useState([
		{
			userName: "Uzytkownik",
			postTitle: "Tytul",
			avatar:
				"https://www.glamour.pl/uploads/media/default/0004/28/bedzie-avatar-2.jpeg",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
		},
		{
			userName: "Inny Uzytkownik",
			postTitle: "Fajny tytul, lecz ten sam obrazek",
			avatar:
				"https://www.glamour.pl/uploads/media/default/0004/28/bedzie-avatar-2.jpeg",
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

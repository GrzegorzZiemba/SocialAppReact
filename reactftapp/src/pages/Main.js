import React, { useState, useEffect } from "react";
import { dataBase } from "../firebase";
import Posts from "../components/Posts/Posts";

const Main = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// make 'snapshot' mean camera shot each time something changed (In this situation after post is added)
		dataBase
			.collection("posts")

			.onSnapshot((snapshot) => {
				// .data daje nam mozliwosc do 'dojscia' do wszystkich elementów w danym miejscu
				// doc.id da nam dostęp do id, doc.data() do środka elementu - mozemy uzyc tez .id by zapobiegac re-renderowi apki rzeczy ktore sie nie zmienily (react porównuje sobie KEYS :)
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						post: doc.data(),
					}))
				);
			});
	}, [posts]);

	return (
		<div
			style={{ backgroundColor: "#413620", color: "#FFD791", width: "100%" }}
		>
			<Posts posts={posts} />
		</div>
	);
};

export default Main;

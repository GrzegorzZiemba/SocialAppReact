import React from "react";

const Comments = ({ username, text }) => {
	return (
		<p style={{ margin: ".9rem 0 .4rem 1.1rem", fontSize: "1.3rem" }}>
			<b>{username} : </b>
			{text}
		</p>
	);
};

export default Comments;

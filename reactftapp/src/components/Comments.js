import React from "react";

const Comments = ({ username, text }) => {
	return (
		<p style={{ margin: "9px 0 4px 10px" }}>
			<b>{username} </b>
			{text}
		</p>
	);
};

export default Comments;

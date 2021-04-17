import React from "react";
import styles from "./Post.module.css";
const Post = ({ post }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.nameavatar}>
					<img
						className={styles.avatar}
						src={post.avatar}
						alt={post.userName}
					/>
					<p className={styles.avataruser}>{post.userName}</p>
				</div>
				<div className={styles.postContainer}>
					<img
						className={styles.postImage}
						src={post.image}
						alt={post.postTitle}
					/>
				</div>
				<p className={styles.postParagraph}>
					<span className={styles.postusername}>{post.userName} </span>
					{post.postTitle}
				</p>
			</div>
		</>
	);
};

export default Post;

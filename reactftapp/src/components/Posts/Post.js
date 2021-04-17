import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./Post.module.css";
const Post = ({ post }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.nameavatar}>
					<Avatar size={"6rem"} avatar={post.avatar} name={post.postTitle} />
					<p className={styles.avataruser}>{post.userName}</p>
				</div>
				<div className={styles.postContainer}>
					<img
						className={styles.postImage}
						src={post.image}
						alt={post.postTitle}
					/>
					<div className={styles.likeOrNot}></div>
				</div>

				<p className={styles.postParagraph}>
					<span className={styles.postusername}>{post.userName} </span>
					{post.postTitle}
				</p>
				<div className={styles.commentContainer}>
					<Avatar size={"3rem"} avatar={post.avatar} name={post.postTitle} />
					<p className={styles.commentParagraph}>
						<span className={styles.commentUsername}>Username</span>
						Some comment made by that user
					</p>
				</div>
			</div>
		</>
	);
};

export default Post;

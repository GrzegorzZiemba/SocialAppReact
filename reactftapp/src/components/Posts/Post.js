import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./Post.module.css";
const Post = ({ userName, image, avatar, postTitle }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.nameavatar}>
					<Avatar size={"6rem"} avatar={avatar} name={postTitle} />
					<p className={styles.avataruser}>{userName}</p>
				</div>
				<div className={styles.postContainer}>
					<img className={styles.postImage} src={image} alt={postTitle} />
					<div className={styles.likeOrNot}></div>
				</div>

				<p className={styles.postParagraph}>
					<span className={styles.postusername}>{userName} </span>
					{postTitle}
				</p>
				<div className={styles.commentContainer}>
					<Avatar size={"3rem"} avatar={avatar} name={postTitle} />
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

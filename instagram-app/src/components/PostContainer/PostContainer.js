import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	console.log(props);
	return (
		<div className="postContainer">
			<div className="postTop">
				<img src={props.thumbnailUrl} alt="" />
				{props.username}
			</div>
			<div classname="imageContainer">
				<img src={props.imageUrl} alt="" />
			</div>
			<div className="postIcons">
				<div className="postIcon">
					<i class="far fa-heart" />
				</div>
				<div className="postIcon2">
					<i class="far fa-comment" />
				</div>
			</div>
			<div className="likes">{props.likes} Likes</div>
			<div className="postComment">
				{props.comments.map(el => (
					<CommentSection key={el.id} user={el.username} text={el.text} />
				))}
			</div>
			<div className="timeStamp">{props.timestamp}</div>
			<input className="addComment" placeholder="Add a comment..." />
		</div>
	);
};

export default PostContainer;

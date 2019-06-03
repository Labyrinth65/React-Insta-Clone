import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
	return (
		<div>
			{props.user}
			{props.text}
		</div>
	);
};

export default CommentSection;

import React from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

const CommentSection = props => {
	return (
		<div className="commentSection">
			<b>{props.username}</b>
			{"  "}
			{props.text}
		</div>
	);
};

CommentSection.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default CommentSection;

import React from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

const CommentSection = props => {
	return (
		<div className="commentSection">
			<b>{props.user}</b>
			{"  "}
			{props.text}
		</div>
	);
};

CommentSection.propTypes = {
	user: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default CommentSection;

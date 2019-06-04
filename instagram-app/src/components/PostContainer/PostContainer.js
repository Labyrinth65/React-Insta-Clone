import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Card, CardImg, CardText } from "reactstrap";

const PostContainer = props => {
	return (
		<div className="postWrap">
			<Card className="postContainer">
				<div className="postTop">
					<img src={props.thumbnailUrl} alt="thumb" />
					{props.username}
				</div>
				<div className="imageContainer">
					<CardImg src={props.imageUrl} alt="main" />
				</div>
				<div className="postIcons">
					<div className="postIcon">
						<i className="far fa-heart" />
					</div>
					<div className="postIcon2">
						<i className="far fa-comment" />
					</div>
				</div>
				<CardText className="likes">{props.likes} Likes</CardText>
				<div className="postComment">
					{props.comments.map(el => (
						<CommentSection key={el.id} {...el} />
					))}
				</div>
				<div className="timeWrap">
					<CardText className="timeStamp">
						<Moment parse="MMMM Do YYYY, HH:mm:ss a" fromNow>
							{/* Need to add hover to show actual time */}
							{props.timestamp}
						</Moment>
					</CardText>
				</div>
				<form>
					<input className="addComment" placeholder="Add a comment..." />
				</form>
			</Card>
		</div>
	);
};

PostContainer.propTypes = {
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	timestamp: PropTypes.string.isRequired,
	comments: PropTypes.array.isRequired
};

export default PostContainer;

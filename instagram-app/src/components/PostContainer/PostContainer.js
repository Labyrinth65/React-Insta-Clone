import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Card, CardImg, CardText } from "reactstrap";

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.likes,
			comments: this.props.comments,
			newComment: ""
		};
	}

	formChange = e => {
		this.setState({
			newComment: e.target.value
		});
	};

	addComment = e => {
		e.preventDefault();
		const addedComment = {
			username: "clem9281",
			text: this.state.newComment,
			id: Date.now()
		};
		this.setState({
			comments: [...this.state.comments, addedComment],
			newComment: ""
		});
	};

	addLike = e => {
		e.preventDefault();
		this.setState({
			likes: this.state.likes + 1
		});
	};

	render() {
		return (
			<div className={["postWrap", this.props.display].join(" ")}>
				<Card className="postContainer">
					<div className="postTop">
						<img src={this.props.thumbnailUrl} alt="thumb" />
						{this.props.username}
					</div>
					<div className="imageContainer">
						<CardImg src={this.props.imageUrl} alt="main" />
					</div>
					<div className="postIcons">
						<div onClick={this.addLike} className="postIcon">
							<i className="far fa-heart" />
						</div>
						<div className="postIcon2">
							<i className="far fa-comment" />
						</div>
					</div>
					<CardText className="likes">{this.state.likes} Likes</CardText>
					<div className="postComment">
						{this.state.comments.map(el => (
							<CommentSection key={el.id} {...el} />
						))}
					</div>
					<div className="timeWrap">
						<CardText className="timeStamp">
							<Moment parse="MMMM Do YYYY, HH:mm:ss a" fromNow>
								{/* Need to add hover to show actual time */}
								{this.props.timestamp}
							</Moment>
						</CardText>
					</div>
					<form onSubmit={this.addComment}>
						<input
							className="addComment"
							placeholder="Add a comment..."
							value={this.state.newComment}
							onChange={this.formChange}
						/>
					</form>
				</Card>
			</div>
		);
	}
}

PostContainer.propTypes = {
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	timestamp: PropTypes.string.isRequired,
	comments: PropTypes.array.isRequired
};

export default PostContainer;

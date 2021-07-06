import React from "react";
// import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Card, CardImg, CardText } from "reactstrap";
import styled from "styled-components";

const PostWrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 2% 0;
	display: ${props => props.displayProp};
`;

const PostContainerCSS = styled.div`
	width: 60%;
	border: 1px solid lightgrey;
`;

const PostTop = styled.div`
	font-weight: bold;
	vertical-align: center;
`;

const PostAvatar = styled.img`
	width: 8%;
	height: 8%;
	margin: 2%;
	object-fit: cover;
	border-radius: 50%;
`;

const PostImage = styled.img`
	width: 100%;
`;

const PostIcons = styled.div`
	display: flex;
	padding: 2% 3%;
	font-size: 1.5rem;
`;
const PostIcon1 = styled.div`
	width: 7%;
`;

const PostIcon2 = styled.div`
	transform: scaleX(-1);
`;

const PostLikes = styled.div`
	font-weight: bold;
	padding: 0 3%;
`;

const PostComment = styled.div`
	padding: 0 3%;
`;

const TimeWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const TimeStamp = styled.div`
	padding: 2% 0;
	width: 95%;
	font-size: 0.8rem;
	color: grey;
	border-bottom: 1px solid lightgrey;
`;

const PostForm = styled.form`
	display: flex;
`;

const AddComment = styled.input`
	border: none;
	padding: 2% 3%;
	flex-grow: 1;

	&:focus {
		outline: none;
	}
`;

// Refactor Styling

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
			username: localStorage.getItem("user"),
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

	mouseOver = e => {};

	render() {
		return (
			<PostWrap displayProp={this.props.display}>
				<PostContainerCSS>
					<PostTop>
						<PostAvatar src={this.props.thumbnailUrl} alt="thumb" />
						{this.props.username}
					</PostTop>
					<div className="imageContainer">
						<PostImage src={this.props.imageUrl} alt="main" />
					</div>
					<PostIcons>
						<PostIcon1 onClick={this.addLike}>
							<i className="far fa-heart" />
						</PostIcon1>
						<PostIcon2>
							<i className="far fa-comment" />
						</PostIcon2>
					</PostIcons>
					<PostLikes>{this.state.likes} Likes</PostLikes>
					<PostComment>
						{this.state.comments.map(el => (
							<CommentSection key={el.id} {...el} />
						))}
					</PostComment>
					<TimeWrap>
						<TimeStamp onMouseOver={this.mouseOver}>
							<Moment parse="MMMM Do YYYY, HH:mm:ss a" fromNow>
								{/* Need to add hover to show actual time */}
								{this.props.timestamp}
							</Moment>
						</TimeStamp>
					</TimeWrap>
					<PostForm onSubmit={this.addComment}>
						<AddComment
							placeholder="Add a comment..."
							value={this.state.newComment}
							onChange={this.formChange}
						/>
					</PostForm>
				</PostContainerCSS>
			</PostWrap>
		);
	}

	// render() {
	// 	return (
	// 		<div className={["postWrap", this.props.display].join(" ")}>
	// 			<Card className="postContainer">
	// 				<div className="postTop">
	// 					<img src={this.props.thumbnailUrl} alt="thumb" />
	// 					{this.props.username}
	// 				</div>
	// 				<div className="imageContainer">
	// 					<CardImg src={this.props.imageUrl} alt="main" />
	// 				</div>
	// 				<div className="postIcons">
	// 					<div onClick={this.addLike} className="postIcon">
	// 						<i className="far fa-heart" />
	// 					</div>
	// 					<div className="postIcon2">
	// 						<i className="far fa-comment" />
	// 					</div>
	// 				</div>
	// 				<CardText className="likes">{this.state.likes} Likes</CardText>
	// 				<div className="postComment">
	// 					{this.state.comments.map(el => (
	// 						<CommentSection key={el.id} {...el} />
	// 					))}
	// 				</div>
	// 				<div className="timeWrap">
	// 					<CardText onMouseOver={this.mouseOver} className="timeStamp">
	// 						<Moment parse="MMMM Do YYYY, HH:mm:ss a" fromNow>
	// 							{/* Need to add hover to show actual time */}
	// 							{this.props.timestamp}
	// 						</Moment>
	// 					</CardText>
	// 				</div>
	// 				<form onSubmit={this.addComment}>
	// 					<input
	// 						className="addComment"
	// 						placeholder="Add a comment..."
	// 						value={this.state.newComment}
	// 						onChange={this.formChange}
	// 					/>
	// 				</form>
	// 			</Card>
	// 		</div>
	// 	);
	// }
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

import React from "react";
// import "./SearchBar.scss";
import instaTitle from "./InstaTitle.png";
import styled from "styled-components";

const SearchBarCSS = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2%;
`;

const SearchLeft = styled.div`
	display: flex;
	font-weight: bold;
	width: 30%;
`;

const InstaLogo = styled.div`
	font-size: 1.5rem;
	padding-right: 5%;
`;

const InstaTitle = styled.div`
	padding: 3% 0 0 3%;
	border-left: solid grey 1px;
`;

const InstaImg = styled.img`
	width: 40%;
`;

const SearchInput = styled.input`
	text-align: center;
	font-family: FontAwesome;
	width: 20%;
	font-size: 0.7rem;
`;

const SearchRight = styled.div`
	display: flex;
	width: 30%;
	justify-content: space-around;
	padding: 1% 0 0 10%;
`;

// Refactor Styling

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logOut = e => {
		localStorage.removeItem("user", localStorage.getItem("user"));
		window.location.reload();
	};

	render() {
		return (
			<SearchBarCSS>
				<SearchLeft>
					<InstaLogo>
						<i className="fab fa-instagram" />
					</InstaLogo>
					<InstaTitle>
						<InstaImg src={instaTitle} alt="instagram" />
					</InstaTitle>
				</SearchLeft>
				<SearchInput
					placeholder="&#xF002; Search  "
					onChange={this.props.searchChange}
				/>
				<SearchRight>
					<div className="iconRight">
						<i className="far fa-compass" />
					</div>
					<div className="iconRight">
						<i className="far fa-heart" />
					</div>
					<div onClick={this.logOut} className="iconRight">
						<i className="far fa-user" />
					</div>
				</SearchRight>
			</SearchBarCSS>
		);
	}

	// render() {
	// 	return (
	// 		<div className="searchBar">
	// 			<div className="searchLeft">
	// 				<div className="instaLogo">
	// 					<i className="fab fa-instagram" />
	// 				</div>
	// 				<div className="instaTitle">
	// 					<img src={instaTitle} alt="instagram" />
	// 				</div>
	// 			</div>
	// 			<input
	// 				className="searchInput"
	// 				placeholder="&#xF002; Search  "
	// 				onChange={this.props.searchChange}
	// 			/>
	// 			<div className="searchRight">
	// 				<div className="iconRight">
	// 					<i className="far fa-compass" />
	// 				</div>
	// 				<div className="iconRight">
	// 					<i className="far fa-heart" />
	// 				</div>
	// 				<div onClick={this.logOut} className="iconRight">
	// 					<i className="far fa-user" />
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }
}

export default SearchBar;

import React from "react";
import "./SearchBar.scss";
import instaTitle from "./InstaTitle.png";

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
			<div className="searchBar">
				<div className="searchLeft">
					<div className="instaLogo">
						<i className="fab fa-instagram" />
					</div>
					<div className="instaTitle">
						<img src={instaTitle} alt="instagram" />
					</div>
				</div>
				<input
					className="searchInput"
					placeholder="&#xF002; Search  "
					onChange={this.props.searchChange}
				/>
				<div className="searchRight">
					<div className="iconRight">
						<i className="far fa-compass" />
					</div>
					<div className="iconRight">
						<i className="far fa-heart" />
					</div>
					<div onClick={this.logOut} className="iconRight">
						<i className="far fa-user" />
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;

import React from "react";
import "./SearchBar.scss";
import instaTitle from "./InstaTitle.png";

const SearchBar = props => {
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
				onChange={props.searchChange}
			/>
			<div className="searchRight">
				<div className="iconRight">
					<i className="far fa-compass" />
				</div>
				<div className="iconRight">
					<i className="far fa-heart" />
				</div>
				<div className="iconRight">
					<i className="far fa-user" />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;

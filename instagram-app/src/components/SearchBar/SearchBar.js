import React from "react";
import "./SearchBar.scss";

const SearchBar = props => {
	return (
		<div className="searchBar">
			<div className="searchLeft">
				<div className="instaLogo">
					<i class="fab fa-instagram" />
				</div>
				<div>Instagram</div>
			</div>
			<input className="searchInput" placeholder="&#xF002; Search" />
			<div className="searchRight">
				<div className="iconRight">
					<i class="far fa-compass" />
				</div>
				<div className="iconRight">
					<i class="far fa-heart" />
				</div>
				<div className="iconRight">
					<i class="far fa-user" />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;

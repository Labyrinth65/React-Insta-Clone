import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchValue: ""
		};
	}

	componentDidMount() {
		this.setState({
			data: dummyData
		});
	}

	searchChange = e => {
		this.setState({
			searchValue: e.target.value
		});

		const searchTerm = e.target.value;
		this.state.data.map(user => {
			if (user.username.includes(searchTerm)) {
				return (user.display = "flex");
			} else return (user.display = "none");
		});
	};
	// .filter(el => el.username.includes(this.state.searchValue))

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar searchChange={this.searchChange} />
				</header>
				<main>
					{this.state.data.map(el => (
						<PostContainer key={el.id} {...el} />
					))}
				</main>
			</div>
		);
	}
}

export default PostsPage;

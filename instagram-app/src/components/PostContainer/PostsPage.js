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

		this.setState(prevState => ({
			data: prevState.data.map(user => {
				if (user.username.includes(searchTerm)) {
					user.display = "flex";
					return user;
				} else {
					user.display = "none";
					return user;
				}
			})
		}));

		// this.state.data.map(user => {
		// 	if (user.username.includes(searchTerm)) {
		// 		return (user.display = "flex");
		// 	} else return (user.display = "none");
		// });
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar searchChange={this.searchChange} />
				</header>
				<main>
					{this.state.data
						// .filter(el => el.username.includes(this.state.searchValue))
						.map(el => (
							<PostContainer key={el.id} {...el} />
						))}
				</main>
			</div>
		);
	}
}

export default PostsPage;

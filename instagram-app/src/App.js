import React from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.setState({
			data: dummyData
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar />
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

export default App;

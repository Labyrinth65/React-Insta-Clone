import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: dummyData
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar />
				</header>
				<main>
					{this.state.data.map(el => (
						<PostContainer
							key={el.id}
							// userThumb={el.thumbnailUrl}
							// username={el.username}
							// img={el.imageUrl}
							// likes={el.likes}
							// time={el.timestamp}
							// comments={el.comments}
							{...el}
						/>
					))}
				</main>
			</div>
		);
	}
}

export default App;

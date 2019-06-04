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
		this.hydrateStateWithLocalStorage();

		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);

		// saves if component has a chance to unmount
		this.saveStateToLocalStorage();
	}

	hydrateStateWithLocalStorage() {
		// for all items in state
		for (let key in this.state) {
			// if the key exists in localStorage
			if (localStorage.hasOwnProperty(key)) {
				// get the key's value from localStorage
				let value = localStorage.getItem(key);

				// parse the localStorage string and setState
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value });
				}
			}
		}
	}

	saveStateToLocalStorage() {
		// for every item in React state
		for (let key in this.state) {
			// save to localStorage
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
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

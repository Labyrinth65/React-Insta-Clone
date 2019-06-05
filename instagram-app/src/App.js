import React from "react";
import "./App.scss";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";
import PostsPage from "./components/PostContainer/PostsPage";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
	render() {
		return (
			<div>
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}

export default App;

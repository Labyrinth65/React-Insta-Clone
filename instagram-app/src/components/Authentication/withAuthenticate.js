import React from "react";

const withAuthenticate = Component => Component2 =>
	class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false
			};
		}

		componentDidMount() {
			if (localStorage.getItem("user")) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		}

		render() {
			return this.state.loggedIn === true ? <Component /> : <Component2 />;
		}
	};

export default withAuthenticate;

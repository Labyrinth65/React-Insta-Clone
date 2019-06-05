import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	login = e => {
		const user = this.state.username;
		localStorage.setItem("user", user);
		window.location.reload();
	};

	render() {
		return (
			<Form onSubmit={this.login}>
				<FormGroup>
					<Label>Username:</Label>
					<Input
						name="username"
						onChange={this.handleChange}
						placeholder="username"
					/>
				</FormGroup>
				<FormGroup>
					<Label>Password:</Label>
					<Input
						name="password"
						onChange={this.handleChange}
						placeholder="password"
					/>
				</FormGroup>
				<Button onClick={this.login}>Login</Button>
			</Form>
		);
	}
}

export default Login;

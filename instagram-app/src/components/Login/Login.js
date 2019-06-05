import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import instaTitle from "../SearchBar/InstaTitle.png";
import "./Login.scss";

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
		e.preventDefault();
		localStorage.setItem("user", this.state.username);
		window.location.reload();
	};

	render() {
		return (
			<div className="loginWrap">
				<Form className="loginContainer" onSubmit={this.login}>
					<div className="instaTitle">
						<img src={instaTitle} alt="instagram" />
					</div>
					<FormGroup className="formName">
						<Label className="labelName">Username:</Label>
						<Input
							name="username"
							onChange={this.handleChange}
							placeholder="Username"
						/>
					</FormGroup>
					<FormGroup className="formName">
						<Label className="labelName">Password:</Label>
						<Input
							name="password"
							onChange={this.handleChange}
							placeholder="Password"
						/>
					</FormGroup>
					<Button>Login</Button>
				</Form>
			</div>
		);
	}
}

export default Login;

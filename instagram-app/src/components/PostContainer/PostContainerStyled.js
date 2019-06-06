import React from "react";
import styled from "styled-components";

const AddComment = styled.input`
	border: none;
	padding: 2% 3%;
	flex-grow: 1;

	${AddComment}:focus {
		outline: none;
	}
`;

export default AddComment;

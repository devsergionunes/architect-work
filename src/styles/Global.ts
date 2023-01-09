import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin:0;
		padding:0;
		outline:0 ;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}

	body {
			font: 400 14px 'Lato', sans-serif;
			background-color: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(252,200,117,0.5802521692270659) 73%, rgba(251,188,86,0.4878151944371498) 83%, rgba(255,203,119,0.4962185557816877) 90%, rgba(255,207,130,0.8351541300113796) 100%);
			-webkit-font-smoothing: antialiased; /*Melhora a visualização da fonte no google chrome*/
			-ms-overflow-style: none; /* for Internet Explorer, Edge */
			scrollbar-width: none; /* for Firefox */
			overflow-y: scroll;
	}

	@media screen {
			@media (max-width: 1024px) {
					html {
							font-size: 75.5%;
					}
			}
	}

	body::-webkit-scrollbar {
	display: none; /* for Chrome, Safari, and Opera */
	}

	input, button, textarea {
			font: 400 18px 'Lato', sans-serif;
	}


	button, a {
			cursor: pointer;
	}

	/*Remover o underline dos links*/
	:-webkit-any-link {
			text-decoration: none;
	}

	:-moz-any-link {
			text-decoration: none;
	}

	:any-link {
			text-decoration: none;
	}

	:-webkit-any-link:hover{
			font-weight: bold;
	}

	:-moz-any-link:hover{
			font-weight: bold;
	}

	:any-link:hover{
			font-weight: bold;
	}
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		min-height: 100vh;
		font-family: 'Rubik', sans-serif;
	}
`;

interface IVariant {
	discount: number
	color: string
	size: string 
	price: number
	stock: number
	sku: string
	imageUrl: string
  }
export type {IVariant}
export default GlobalStyle;

/* 
	Donny Bertucci: @xnought
	Summary: 
		This file creates the navigation checkpoint coomponent
*/
import React from "react";
import { scroller } from "react-scroll";
import { Box, Button, Typography } from "@material-ui/core";
import demoGIF from "./assets/demo.gif";

export const Nav = () => {
	const subButton = (title, scrollTitle) => (
		<Button
			style={{ color: "#5B5B5B" }}
			size="small"
			onClick={() => {
				scroller.scrollTo(scrollTitle, {
					duration: 1500,
					delay: 100,
					smooth: true,
				});
			}}
		>
			{title}
		</Button>
	);
	const mainButton = (title, scrollTitle) => (
		<Button
			onClick={() => {
				scroller.scrollTo(scrollTitle, {
					duration: 1500,
					delay: 100,
					smooth: true,
				});
			}}
		>
			{title}
		</Button>
	);
	return (
		<Box display="flex">
		</Box>
	);
};

export default Nav;

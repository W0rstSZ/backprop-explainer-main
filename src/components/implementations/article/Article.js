/* 
	Donny Bertucci: @xnought
	Summary: 
		This file bringing everything together into the article
*/
import React from "react";
import { $, $$ } from "./Typeset";
import {
	Box,
	Button,
	Typography,
	Fab,
	Tooltip,
	Card,
	CardContent,
	Divider,
} from "@material-ui/core";
import { Help, PlayArrow, ArrowBackIos } from "@material-ui/icons";

import { Element } from "react-scroll";
import AutoTool from "./AutoTool";
import ManualTool from "./ManualTool";
import NestedFunction from "./NestedFunction";
import ToggleForward from "./ToggleForward";
/* Assets imports */
import summarySVG from "./assets/summary.svg";
import forwardKeySVG from "./assets/diagramSVG/forward-key.svg";
import forwardNoKeySVG from "./assets/diagramSVG/forward.svg";
import forwardComputationSVG from "./assets/diagramSVG/forwardComputation.svg";
import backwardKeySVG from "./assets/diagramSVG/backward-key.svg";
import backwardNoKeySVG from "./assets/diagramSVG/backward.svg";
import backwardComputationSVG from "./assets/diagramSVG/backwardComputation.svg";
import contourExplain from "./assets/contour-explain.svg";
import gdExplain from "./assets/gd-explain.svg";

/* Functional Component */
const Explanation = () => {
	const orange = "#FFA500";
	const blue = "#56A8C7";

	const orangeEM = <em style={{ color: orange }}>orange</em>;
	const blueEM = <em style={{ color: blue }}>blue</em>;
	const greenEM = <em style={{ color: "#8db600" }}>green</em>;
	const pinkEM = <em style={{ color: "#F50257" }}>pink</em>;
	/* Link Component that can be reused */
	const link = (href, content) => (
		<Button
			size="small"
			style={{ color: "#155676" }}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{content}
		</Button>
	);

	const definition = (word, desc) => (
		<Tooltip
			style={{
				backgroundColor: "#56A8C7",
				color: "black",
			}}
			title={
				<Card>
					<CardContent>{desc}</CardContent>
				</Card>
			}
			placement="top"
			arrow
		>
			{word}
		</Tooltip>
	);

	/* Topic formatted component */
	const topic = (title) => <Typography variant="h3">{title}</Typography>;
	/* SubTopic formatted component */
	const subtopic = (title) => <Typography variant="h4">{title}</Typography>;

	/* Explanation paper */
	const paper = (
		<Box>
			

			<br />
			<Element name="see2">
				<Typography variant="h4">
					Backprop Explainer Quick Start
				</Typography>
			</Element>
			<Typography variant="h6">
				<ol>
					<li>
						Press{" "}
						<Fab
							style={{
								background: "#175676",
								color: "white",
							}}
							size="small"
							disabled={true}
						>
							<PlayArrow fontSize="small" />
						</Fab>{" "}
						to start training
					</li>
					<li>
						Then press{" "}
						<Button
							variant="outlined"
							size="small"
							style={{
								borderColor: "#175676",
								color: "#175676",
							}}
							disabled={true}
						>
							Click to animate epoch #
						</Button>{" "}
						to see forward propagation, <b>backward propagation</b>,
						and update animation at the epoch #
					</li>
					<li>
						To go back to fitting mode click{" "}
						<Button
							variant="outlined"
							size="small"
							style={{
								borderColor: "#175676",
								color: "#175676",
							}}
							disabled={true}
						>
							<ArrowBackIos /> Go back to fitting
						</Button>{" "}
					</li>
				</ol>
			</Typography>
			<Typography variant="h6">
				<b> Click on </b>
				<Help variant="small" style={{ color: "#FFA500" }} />{" "}
				<b>to reveal extra descriptions</b>
			</Typography>
			<br />
		</Box>
	);

	return (
		<Box justifyContent="center" display="flex">
			<Box maxWidth="60%">{paper}</Box>
		</Box>
	);
};
export default Explanation;

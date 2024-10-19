import React from "react";
import "./App.css";

type Props = {};

const App = (props: Props) => {
	return (
		<div className="light">
			<div className=" h-screen flex justify-center items-center">
				<div className="text-slate-900 text-4xl font-bold">Hello React App</div>
			</div>
		</div>
	);
};

export default App;

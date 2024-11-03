import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Assessment from "./components/assessment";

type Props = {};

const App = (props: Props) => {
	return (
		<div className="light">
			<div className="h-[10vh] p-2 flex gap-2 justify-end items-center bg-slate-400 text-xl font-semibold">
				<Link to="/" className="hover:cursor-pointer ">
					Home
				</Link>
				<Link to="/assess_1" className="hover:cursor-pointer">
					Assessment 1
				</Link>
			</div>
			<div className=" h-full flex justify-center items-center">
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Assessment />} path="/assess_1" />
				</Routes>

				<Outlet />
			</div>
		</div>
	);
};

export default App;

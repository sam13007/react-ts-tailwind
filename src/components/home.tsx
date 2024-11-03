import React, { useEffect, useRef, useState } from "react";

type Props = {};

function Home({}: Props) {
	const [counter, setCounter] = useState(0);
	const intervalRef = useRef<any>(null);

	useEffect(() => {
		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);
		return () => {
			console.log("End timer");
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);
	const onFocus = () => {
		intervalRef.current = setInterval(() => {
			setCounter((count) => count + 1);
		}, 1000);
		console.log("Tab is focused ");
	};
	const onBlur = () => {
		clearInterval(intervalRef.current);
		console.log("Tab is not focused");
	};

	const startInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		intervalRef.current = setInterval(() => {
			setCounter((counter) => counter + 1);
		}, 1000);
	};
	const pauseInterval = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	};

	const speedUpCounter = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		intervalRef.current = setInterval(() => {
			setCounter((count) => count + 1);
		}, 500);
	};
	return (
		<div className="text-slate-900 text-4xl font-bold">
			<div className="flex gap-2 flex-col justify-center items-center">
				Count- {counter}
				<div className="flex gap-2">
					<button
						className="px-4 py-2 rounded-lg bg-slate-300"
						onClick={startInterval}
					>
						{!intervalRef.current ? "Start" : "1 X"}
					</button>
					<button
						className="px-4 py-2 rounded-lg bg-slate-300"
						onClick={pauseInterval}
					>
						Pause
					</button>

					<button
						className="px-4 py-2 rounded-lg bg-slate-300"
						onClick={speedUpCounter}
					>
						2 X
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;

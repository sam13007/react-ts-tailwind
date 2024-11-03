import React, { useRef, useState } from "react";
import { superheroNames } from "../constants";

type Props = {};

const Assessment = (props: Props) => {
	const [text, setText] = useState("");
	const timerRef = useRef<any>();
	const [superheroList, setSuperHeroList] = useState<any>([]);
	const handleChange = (e: any) => {
		setText(e.target.value);
		debouncedSearch(e.target.value);
	};

	const debounced = (callback: any, timer: any) => {
		return (...args: any) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = undefined;
			}
			timerRef.current = setTimeout(() => callback(...args), timer);
		};
	};
	const search = (value: any) => {
		const list = superheroNames.filter((name) => {
			return name.toLowerCase().includes(value.toLowerCase());
		});
		console.log(list);
		setSuperHeroList(list);
		// Make API call or search logic here
	};
	const debouncedSearch = debounced(search, 2000);

	return (
		<div>
			<h1 className="text-xl">Debouncing search box</h1>
			<input
				type="text"
				placeholder="Text seach here"
				value={text}
				className="border-1 border-slate-800   p-1"
				onChange={handleChange}
			/>
			{superheroList.length > 0 ? (
				superheroList.map((name: string, index: number) => {
					return (
						<ul key={index} className="shadow-sm shadow-gray-400 py-1 px-2">
							<li>{name}</li>
						</ul>
					);
				})
			) : (
				<div>No data found</div>
			)}
		</div>
	);
};

export default Assessment;

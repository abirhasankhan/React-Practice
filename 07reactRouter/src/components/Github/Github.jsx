import React from 'react'
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

	const data = useLoaderData(); // Use useLoaderData to get data from the loader

	// const [data, setData] = useState([])
	// useEffect(() => {
	//     fetch("https://api.github.com/users/abirkhan-zero")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	//             console.log(data);
	//             setData(data)
	//         });
	// }, [])
	return (
		<div className="text-center bg-gray-600 text-white text-3xl p-4 m-4">
			Github followers: {data?.followers}
			<img src={data?.avatar_url} alt={data?.name} width="200px" />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/abirkhan-zero");

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
};
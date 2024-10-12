import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
	const [lenght, setLenght] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//useRef hook
	const passwordRef = useRef(null);

	//useCallback hook
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numberAllowed) str += "0123456789";
		if (characterAllowed) str += '!@#$%^&*()~_+-={}[]|:;"<>,./?';

		for (let i = 0; i < lenght; i++) {
			let char = Math.floor(Math.random() * str.length + 1);

			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [lenght, numberAllowed, characterAllowed, setPassword]);

	const copyPassToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 999999); //select range
		window.navigator.clipboard.writeText(password);
	}, [password]);

	//useEffect hook
	useEffect(() => {
		passwordGenerator();
	}, [lenght, numberAllowed, characterAllowed, passwordGenerator]);

	return (
		<>
			<div
				className="w-full max-w-md mx-auto shadow-md rounded-lg 
                p-4 px-4 py-3 my-8 text-orange-500 bg-gray-700"
			>
				<h1 className="text-center text-white my-3">
					Password Generator
				</h1>

				<div className="flex shadow rounderd-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3"
						placeholder="Password"
						readOnly
						ref={passwordRef}
					/>

					<button
					onClick={copyPassToClipboard}
						className="outline-none bg-blue-700 text-white px-3 py-0.5 
						shrink-0"
					>
						COPY
					</button>
				</div>

				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={20}
							value={lenght}
							className="cursor-pointer"
							onChange={(e) => {
								setLenght(e.target.value);
							}}
						/>
						<label>Lenght: {lenght}</label>
					</div>

					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							id="numberInput"
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>

					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={characterAllowed}
							id="CharacterInput"
							onChange={() => {
								setCharacterAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="CharacterInput">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App

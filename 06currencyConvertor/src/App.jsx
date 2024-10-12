import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
	let backgroundImage =
		"https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200";

	const [amount, setAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [toCurrency, setToCurrency] = useState("bdt");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(fromCurrency);

	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[toCurrency]);
	};

	return (
		<>
			<div
				className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url('${backgroundImage}')`,
				}}
			>
				{/* Parent container with Flexbox */}
				<div className="flex w-full max-w-6xl mx-auto">
					{/* Left-side image div */}
					<div className="bg-indigo-300 w-1/2 p-2">
						<img
							className="object-cover h-96 w-full rounded-lg"
							src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg"
							alt="Currency"
						/>
					</div>

					{/* Right-side form div */}
					<div className="w-1/2 flex items-center justify-center p-5">
						<div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									convert();
								}}
							>
								<div className="w-full mb-1">
									<InputBox
										label="From"
										amount={amount}
										currencyOptions={options}
										onCurrencyChange={(currency) =>
											setFromCurrency(currency)
										}
										selectCurrency={fromCurrency}
										onAmountChange={(amount) =>
											setAmount(amount)
										}
									/>
								</div>
								<div className="relative w-full h-0.5">
									<button
										type="button"
										className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
										onClick={swap}
									>
										swap
									</button>
								</div>
								<div className="w-full mt-1 mb-4">
									<InputBox
										label="To"
										amount={convertedAmount}
										currencyOptions={options}
										onCurrencyChange={(currency) =>
											setToCurrency(currency)
										}
										selectCurrency={toCurrency}
										amountDisabled
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
								>
									Convert {fromCurrency.toUpperCase()} to{" "}
									{toCurrency.toUpperCase()}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

function maximumWealth(accounts) {
	let maximum = 0;
	for (const account of accounts) {
		let accountWealth = account.reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		}, 0);

		if (accountWealth > maximum) {
			maximum = accountWealth;
		}
	}

	return maximum;
}

//faster solution
function maximumWealth(accounts) {
	const wealthsArray = accounts.map((account) =>
		account.reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		}, 0)
	);

	return Math.max(...wealthsArray);
}

function fizzBuzz(n) {
	const responseArray = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			responseArray.push("FizzBuzz");
		} else if (i % 3 == 0) {
			responseArray.push("Fizz");
		} else if (i % 5 == 0) {
			responseArray.push("Buzz");
		} else {
			responseArray.push(String(i));
		}
	}

	return responseArray;
}

//fizzBuzz solution
let i = 0;
while (i < 100) {
	i += 1;

	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// Solutio

let m = 0;
while (m < 100) {
	m = m + 1;
	let output = "";
	if (m % 3 == 0) {
		output = output + "Pizz";
	}
	if (m % 5 == 0) {
		output = output + "Kuzz";
	}
	console.log(output || m);
}

/*
Syncronous codes -->

Synchronous code is executed line by line, in the order it's written. Each operation waits for the 
previous one to complete before moving on to the next one.

function sum(a, b) {
	return parseInt(a) + parseInt(b);
}

let ans = sum(2, 3)
console.log(sum);

*/
function sum(n) {
	return (n*(n+1))/2
}

const ans = sum(100);
console.log(ans);


function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
	ans = ans + i
	}
	return ans;
	}
	const ans1 = sum(100);
	console.log(ans1);
	const ans2 = sum(1000);
	console.log(ans2);
	const ans3 = sum(10000);
	console.log(ans3);

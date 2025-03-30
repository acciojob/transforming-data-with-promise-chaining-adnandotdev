//your JS code here. If required.
let button = document.getElementById("btn")
let output = document.getElementById("output")
button.addEventListener("click", () => {
	let inputNumber = document.getElementById("ip").value
	new Promise((resolve) => {
		setTimeout(() => {
			output.textContent = "Result: " + inputNumber
			resolve(inputNumber)
		}, 2000)
	})
	.then((num) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let outputNum = num*2
				output.textContent = "Result: " + outputNum
				resolve(outputNum)
			}, 2000)
		})
	})
	.then((num) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let outputNum = num-3
				output.textContent = "Result: " + outputNum
				resolve(outputNum)
			}, 1000)
		})
	})
	.then((num) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let outputNum = num/2
				output.textContent = "Result: " + outputNum
				resolve(outputNum)
			}, 1000)
		})
	})
	.then((num) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let outputNum = num+10
				output.textContent = "Final Result: " + outputNum
				resolve(outputNum)
			}, 1000)
		})
	})
})
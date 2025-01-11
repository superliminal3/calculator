const buttonsContainer = document.querySelector("#buttonsContainerA");
const displayDiv = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const clearEntryButton = document.querySelector("#clear-entry");

let buttons = [];
let activeSign = 0;
let opcount = 0;

function display(n) {
	displayDiv.textContent = n;
}

function operate(prev, cur, sign) {
	if (!isNaN(parseFloat(cur)) && !isNaN(parseFloat(prev))) {
		switch (sign) {
			case '/': return parseFloat(prev) / parseFloat(cur);
			case '*': return parseFloat(prev) * parseFloat(cur);
			case '-': return parseFloat(prev) - parseFloat(cur);
			case '+': return parseFloat(prev) + parseFloat(cur);
		}
	}
}

function createButtons() {
	let activeBuf = "";
	let prevBuf = "";
	let sign = "";

	function onclickSignButton(opSign) {
		display(opSign);
		sign = opSign;
		if (prevBuf == "") {
			prevBuf = activeBuf;
		} else if (!isNaN(parseFloat(prevBuf)) && !isNaN(parseFloat(activeBuf))) {
			prevBuf = operate(prevBuf, activeBuf, opSign);
		}
		console.log(prevBuf, sign);
		activeBuf = "";
	}

	function onclickNumButton(num) {
		activeBuf += num;
		display(activeBuf);
	}

	function onclickEqualButton() {
		if (!isNaN(prevBuf) && !isNaN(parseFloat(activeBuf))) {
			prevBuf = operate(prevBuf, activeBuf, sign);
			display(prevBuf);
			activeBuf = "";
		}
	}

	for (let i = 0; i < 16; i++) {
		buttons[i] = document.createElement("button");
		buttons[i].setAttribute("class", "buttonA");
		buttonsContainer.appendChild(buttons[i]);

		switch (i) {
			case 0:  buttons[i].onclick = () => onclickNumButton("7"); buttons[i].textContent = "7"; break;
			case 1:  buttons[i].onclick = () => onclickNumButton("8"); buttons[i].textContent = "8"; break;
			case 2:  buttons[i].onclick = () => onclickNumButton("9"); buttons[i].textContent = "9"; break;
			case 3:  buttons[i].onclick = () => onclickSignButton("/"); buttons[i].textContent = "/"; break;
			case 4:  buttons[i].onclick = () => onclickNumButton("4"); buttons[i].textContent = "4"; break;
			case 5:  buttons[i].onclick = () => onclickNumButton("5"); buttons[i].textContent = "5"; break;
			case 6:  buttons[i].onclick = () => onclickNumButton("6"); buttons[i].textContent = "6"; break;
			case 7:  buttons[i].onclick = () => onclickSignButton("*"); buttons[i].textContent = "*"; break;
			case 8:  buttons[i].onclick = () => onclickNumButton("1"); buttons[i].textContent = "1"; break;
			case 9:  buttons[i].onclick = () => onclickNumButton("2"); buttons[i].textContent = "2"; break;
			case 10: buttons[i].onclick = () => onclickNumButton("3"); buttons[i].textContent = "3"; break;
			case 11: buttons[i].onclick = () => onclickSignButton("-"); buttons[i].textContent = "-"; break;
			case 12: buttons[i].onclick = () => onclickNumButton("0"); buttons[i].textContent = "0"; break;
			case 13: buttons[i].onclick = () => {if (!activeBuf.includes(".")) {onclickNumButton(".");}}; buttons[i].textContent = "."; break;
			case 14: buttons[i].onclick = () => onclickEqualButton(); buttons[i].textContent = "="; break;
			case 15: buttons[i].onclick = () => onclickSignButton("+"); buttons[i].textContent = "+"; break;
		}
	}
	clearButton.onclick = () => {
		prevBuf = "";
		activeBuf = "";
		sign = "";
		display(activeBuf);
	} 
	clearEntryButton.onclick = () => {
		let arr = activeBuf.split("");
		arr.pop();
		activeBuf = arr.join("");
		display(activeBuf);
	}
}

createButtons();

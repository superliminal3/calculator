const buttonsContainer = document.querySelector("#buttonsContainerA");
const display = document.querySelector("#display");

let buttons = [];
let activeSign = 0;
let activeBuf = "";
let prevBuf = "";
let opcount = 0;

function equal() {
	performOperation();
	opcount = 1;
}

function performOperation() {
	if (!isNaN(parseFloat(activeBuf))) {
	switch (activeSign) {
		case 1: prevBuf = parseFloat(prevBuf) / parseFloat(activeBuf); break;
		case 2: prevBuf = parseFloat(prevBuf) * parseFloat(activeBuf); break;
		case 3: prevBuf = parseFloat(prevBuf) - parseFloat(activeBuf); break;
		case 4: prevBuf = parseFloat(prevBuf) + parseFloat(activeBuf); break;
	}
	activeBuf = "";
	display.textContent = prevBuf;
	}
}

function setActiveSign(sign) {
	if (opcount == 0) {
		prevBuf = activeBuf;
	} else if (opcount == 2) {
		performOperation();
	}
	switch (sign) {
		case 1: activeSign = 1; break;
		case 2: activeSign = 2; break;
		case 3: activeSign = 3; break;
		case 4: activeSign = 4; break;
	}
	opcount = 2;
	activeBuf = "";
}

for (let i = 0; i < 16; i++) {
	buttons[i] = document.createElement("button");
	buttons[i].setAttribute("class", "buttonA");
	buttonsContainer.appendChild(buttons[i]);

	switch (i) {
		case 0:  buttons[i].onclick = () => activeBuf += "7"; buttons[i].textContent = "7"; break;
		case 1:  buttons[i].onclick = () => activeBuf += "8"; buttons[i].textContent = "8"; break;
		case 2:  buttons[i].onclick = () => activeBuf += "9"; buttons[i].textContent = "9"; break;
		case 3:  buttons[i].onclick = () => setActiveSign(1); buttons[i].textContent = "/"; break;
		case 4:  buttons[i].onclick = () => activeBuf += "4"; buttons[i].textContent = "4"; break;
		case 5:  buttons[i].onclick = () => activeBuf += "5"; buttons[i].textContent = "5"; break;
		case 6:  buttons[i].onclick = () => activeBuf += "6"; buttons[i].textContent = "6"; break;
		case 7:  buttons[i].onclick = () => setActiveSign(2); buttons[i].textContent = "*"; break;
		case 8:  buttons[i].onclick = () => activeBuf += "1"; buttons[i].textContent = "1"; break;
		case 9:  buttons[i].onclick = () => activeBuf += "2"; buttons[i].textContent = "2"; break;
		case 10: buttons[i].onclick = () => activeBuf += "3"; buttons[i].textContent = "3"; break;
		case 11: buttons[i].onclick = () => setActiveSign(3); buttons[i].textContent = "-"; break;
		case 12: buttons[i].onclick = () => activeBuf += "0"; buttons[i].textContent = "0"; break;
		case 13: buttons[i].onclick = () => activeBuf += "."; buttons[i].textContent = "."; break;
		case 14: buttons[i].onclick = () => equal(); buttons[i].textContent = "="; break;
		case 15: buttons[i].onclick = () => setActiveSign(4); buttons[i].textContent = "+"; break;
	}
}

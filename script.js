const buttonsContainer = document.querySelector("#buttonsContainerA");

let buttons = [];
let buf1 = "";
let buf2 = "";
let globalBuf = "";

for (let i = 0; i < 16; i++) {
	buttons[i] = document.createElement("div");
	buttons[i].setAttribute("class", "button");
	buttonsContainer.appendChild(buttons[i]);
//	switch (i) {
//		case 4: 
//			buttons[i].addEventListener("click", () => {activeBuf = buf2; sign = "/"});
//			break;
//		case 8:
//			buttons[i].addEventListener("click", () => {activeBuf
//
//	}
}

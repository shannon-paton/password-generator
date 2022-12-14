const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// generate two random passwords when user clicks the button
// each password should be 15 characters long

const password1 = document.getElementById('pass1')
const password2 = document.getElementById('pass2')

function generatePassword() {

	let randomPassword1 = "" // random password is empty string
	for (let i = 0; i < 15; i++) { // for each value less than 16
		let randomElement = characters[Math.floor(Math.random() * characters.length)]; // 
  		randomPassword1 += randomElement;
	}
	password1.innerText = randomPassword1.toString()

	let randomPassword2 = ""
	for (let i=0; i < 15; i++) {
		let randomElement = characters[Math.floor(Math.random() * characters.length)];
		randomPassword2 += randomElement;
	}
	password2.innerText = randomPassword2.toString()
}

const copyButton1 = document.getElementById('copy-button-1')
const copyButton2 = document.getElementById('copy-button-2')

function copyPassword(password) {

	let text = password.innerText;
	const el = document.createElement('textarea'); // creating a textarea
	el.value = text; // setting value of text area to the password innerText
	el.setAttribute('readonly', '')
  	el.style.position = 'absolute'
  	el.style.left = '-9999px'
  	document.body.appendChild(el)
  	el.select()
  	document.execCommand('copy')
  	document.body.removeChild(el)
  	alert("Copied the text: " + text);

	// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
	// https://inspiredwebdev.com/copy-to-clipboard-with-javascript/ used this method since it wasn't created as a textarea

}


// stretch goals

// ability to set a password length
// copy-on-click
// toggle "symbols" and "numbers" on/off
// dark/light theme switcher
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// generate two random passwords when user clicks the button
// each password should be 15 characters long


function generatePassword() {

	const password1 = document.getElementById('pass1')
	const password2 = document.getElementById('pass2')

	let randomPassword1 = "" // random password is empty string
	for (let i = 0; i < 15; i++) { // for each value less than 16
		let randomElement = characters[Math.floor(Math.random() * characters.length)]; // 
  		randomPassword1 += randomElement;
	}
	console.log(randomPassword1)
	password1.innerText = randomPassword1
	console.log(password1.innerText.length)

	let randomPassword2 = ""
	for (let i=0; i < 15; i++) {
		let randomElement = characters[Math.floor(Math.random() * characters.length)];
		randomPassword2 += randomElement;
	}
	console.log(randomPassword2)
	password2.innerText = randomPassword2.toString()
	console.log(password2.innerText.length)
}

function copyPassword() {
	
}


// stretch goals

// ability to set a password length
// copy-on-click
// toggle "symbols" and "numbers" on/off
// dark/light theme switcher
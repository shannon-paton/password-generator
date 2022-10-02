const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// generate two random passwords when user clicks the button

// each password should be 15 characters long


function generatePassword() {

	const password1 = document.getElementById('pass1')
	const password2 = document.getElementById('pass2')

	let randomElement = characters[Math.floor(Math.random() * characters.length)];
	console.log(randomElement)

	// get 16 random characters and add to array

	let randomPassword1 = ""
	randomPassword1 += "test1"
	password1.innerHTML = randomPassword1

	let randomPassword2 = ""
	randomPassword2 += "test2"
	password2.innerHTML = randomPassword2



	// turn array into a string, and return within the field


	// button clicked

	// generate random string of 16 characters

	// for both field 1 and field 2



}


// stretch goals

// ability to set a password length
// copy-on-click
// toggle "symbols" and "numbers" on/off
// dark/light theme switcher
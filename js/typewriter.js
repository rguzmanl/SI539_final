
// Got this code from: https://codepen.io/karamfd/pen/weqMwX
// Global variables
var text = "A parte de los deliciosos y saludables platillos que Slimarket te ofrece en su área de restaurant, en el área de tienda también te ofrece una gran variedad de snacks saludables y suplmentos nutricionales.";
var index = 0;

// Typewriting effect
var typeWriter = setInterval(function() {
	document.querySelector(".typing").textContent += text[index];

	index += 1;

	if (index > text.length -1) {
		clearInterval(typeWriter);
	}

}, 50);



// ALL THE CODE COMMENTED OUT BELOW IS THE OTHER THINGS I TRIED BUT I COULD NOT MAKE THEM WORK. THERE WAS A PARTICULAR ERROR (SEE LINES 28 - 31): Uncaught ReferenceError: Typewriter is not defined 'at typewriter.js:28'. Then I found that I needed to import the module and I did but still got some other errors.

// import Typewriter from 'typewriter-effect'


// FROM: https://safi.me.uk/typewriterjs/
// var typing = document.getElementsByClassName('typing');
// console.log(typing);

// var typewriter = new Typewriter(typing, {
//     loop: true
// });
// console.log(typewriter);

// typewriter.typeString('A parte de los deliciosos y saludables platillos que Slimarket te ofrece en su área de restaurant, en el área de tienda también te ofrece una gran variedad de snacks saludables y suplmentos nutricionales.')
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('Strings can be removed')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    // .start();



// THIS CODE DIDN'T WORK EITHER. I TRIED USING "onload" instead of "onclick" TO AVOID THE BUTTON, ALTHOUGH I ALSO TESTED THE BUTTON. I DIDN'T GET ERRORS BUT JUST COULD NOT TYPE ANYTHING. THOUGH THE console.log DID PRINT THE LENGTH SEVERAL TIMES.
// FROM: https://www.w3schools.com/howto/howto_js_typewriter.asp

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementsByClassName("typing").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//     console.log(txt.length);
//   }

// }




// ANOTHER EXAMPLE FROM YOUTUBE. IT WAS NOT WHAT I NEEDED ANYWAYS. AND I DIDN'T TESTED IT

// const TypeWriter = function (txtElement, words, wait = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parsInt(wait, 10);
//     this.type();
//     this.isDeleting = false;

// }


// // Type Method
// TypeWriter.prototype.type = function(){
//     // Current index of word
//     const current = this.wordIndex % this.words.lentgth;
//     // Get full text of current word
//     const fullTxt = this.words[current];
    
//     // Check if deleting
//     if(this.isDeleting){
//         // Remove char
//         this.txt = fullTxt.substring(0, this.txt.lentgth - 1);
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0, this.txt.lentgth + 1);
//     }
//     // Insert text into element
//     this.txtElement.innerHTML = '<span class="txt">${this.txt}</span>';

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting){
//         typeSpeed /=2;
//     }

//     // If word is complete
//     if(!this.isDeleting && this.txt === fullTxt){
//         typeSpeed = this.wait;
//         // set delet to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt ===''){
//         this.isDeleting = false;
//         // move to th enext word
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// // Init on DOM load

// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Init Typewriter
//     new TypeWriter(txtElement, words, wait);
// }
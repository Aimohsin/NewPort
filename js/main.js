
// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 70;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 70;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menu.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu=true;

    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menu.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu=false;
        
    }
}

//const TypeWriter = function (txtElements, word, wait = 3000) {
   //   this.txtElements=txtElements;
    //this.word=word;
   // this.txt='';
 //   this.wordIndex=0;
   // this.wait=parseInt(wait,10);
   // this.type();
   // this.isDeleting=false;
//}

/*TypeWriter.prototype.type=function() {
    const current = this.wordIndex % this.word.length;
    console.log(current);
    const fullTxt= this.word[current];
    //console.log(fullTxt);
    if(this.isDeleting) {
        this.txt=fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt=fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElements.innerHTML=`<span class="txt">${this.txt}</span>`;

    let typeSpeed=300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed=this.wait;
        this.isDeleting=true;
    } else if(!this.isDeleting && this.txt === '') {
        this.isDeleting=false;
        this.wordIndex++;
        typeSpeed=500;
    }
    setTimeout(() => this.type(), 500);
}*/


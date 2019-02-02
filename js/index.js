// Your code goes here

// Mouseover - change background color of all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => {
    button.addEventListener('mouseover', e => {
        button.style.backgroundColor = 'red';
    })
});

// Dblclick - toggle images in content section
const domImages = document.querySelectorAll('.img-content img');
domImages.forEach(domImage => {
    domImage.addEventListener('dblclick', e => {
        if (domImage.getAttribute('src') === 'img/fun.jpg') {
            domImage.setAttribute('src', 'img/adventure.jpg');
        } else {
            domImage.setAttribute('src','img/fun.jpg');
        }
    })
});

// Resize - change background color of paragraph
window.addEventListener('resize',() => {
    const contentDestination = document.querySelector('.content-destination p');
    contentDestination.style.color = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
} )

const random = (min, max) =>{
    let rand = min + Math.random()*(max+1-min);
    rand = rand^0; 
    return rand;
  }

  
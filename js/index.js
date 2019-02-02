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
})



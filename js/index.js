// Your code goes here

// Mouseover - change background color of all buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "red";
  });
});

// Dblclick - toggle images in content section
const domImages = document.querySelectorAll(".img-content img");
domImages.forEach(domImage => {
  domImage.addEventListener("dblclick", e => {
    e.target.getAttribute("src") === "img/fun.jpg"
      ? e.target.setAttribute("src", "img/adventure.jpg")
      : e.target.setAttribute("src", "img/fun.jpg");
  });
});

// Resize - change background color of paragraph
window.addEventListener("resize", () => {
  const contentDestination = document.querySelector(".content-destination p");
  contentDestination.style.color =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
});

// Scroll - changes color on the intro paragraph
window.addEventListener("scroll", () => {
  const intro = document.querySelector(".intro p");
  intro.style.color =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
});

// keydown - removes paragraph and bring it back
const contentP = document.querySelector('.content-section .text-content p');
window.addEventListener('keydown', e => {
    e.stopPropagation();
    contentP.textContent = 'Oh know, you removed this paragraph!'
});


// helper function
const random = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = rand ^ 0;
  return rand;
};

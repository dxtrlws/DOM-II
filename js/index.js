// Your code goes here

// Mouseover - change background color of all buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";

  });
});

// Mouseout {
  buttons.forEach(button => {
    button.addEventListener('mouseout', e => {
      e.target.style.backgroundColor = '#17A2B8'
    })
  } )


// click - click button to launch alert that you are signed up
buttons.forEach(button => {
  button.addEventListener('click', e => {
    alert(`You're all signed up!`);
  })
})

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
const contentP = document.querySelector(".content-section .text-content p");
window.addEventListener("keydown", e => {
  e.stopPropagation();
  contentP.textContent = "Oh know, you removed this paragraph!";
});

// Load - replaced image on page load
window.addEventListener("load", () => {
  const contentDestination = document.querySelector(".content-destination img");
  contentDestination.setAttribute(
    "src",
    "https://via.placeholder.com/600x200?text=This+image+was+replaced+via+load"
  );
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseover', (e) => {
    e.target.style.textDecoration = 'underline';
  })
});

navLinks.forEach(link => {
  link.addEventListener('mouseout', (e) => {
    e.target.style.textDecoration = 'none';
  })
})



// helper function
const random = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = rand ^ 0;
  return rand;
};

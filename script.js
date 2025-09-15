var typed = new Typed(".multiple-text",{
strings: ["Software Engineer", "Web Developer", "Freelancer"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});


  
  


function showCategory(category) {
  const tech = document.getElementById('tech');
  const tools = document.getElementById('tools');
  const buttons = document.querySelectorAll('.skills-buttons button');
  
  // Toggle active button
  buttons.forEach(btn => btn.classList.remove('active'));
  if(category === 'tech') {
    tech.style.display = 'flex';
    tools.style.display = 'none';
    buttons[0].classList.add('active');
  } else {
    tech.style.display = 'none';
    tools.style.display = 'flex';
    buttons[1].classList.add('active');
  }
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};


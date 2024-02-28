
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.display = "block";
    sidemenu.style.right="0";

}
function closemenu(){
  sidemenu.style.display = "none";  
  sidemenu.style.right="-200px";
}

const elements = document.querySelectorAll('#sidemenu a');
for(let i = 0; i < elements.length; ++i){
  elements[i].addEventListener('click', closemenu, false);
}

console.log(elements);

window.onload = function () {
    const headerText = document.querySelector('.header-text h1');
  
    function fadeIn(element, delay) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
  
        if (progress < 1000) {
          element.style.opacity = progress / 1000;
          window.requestAnimationFrame(step);
        }
      };
  
      setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay);
    }
  
    fadeIn(headerText, 500);
  };

  // Get the image element by its class name
const image = document.querySelector('.background-image');

// Set the initial opacity to 0
image.style.opacity = 0;

// Create a function to fade in the image
function fadeIn(element) {
  // Get the current opacity of the image
  const currentOpacity = parseFloat(element.style.opacity);

  // If the current opacity is less than 1, increase it by 0.1
  if (currentOpacity < 1) {
    element.style.opacity = currentOpacity + 0.1;
  }

  // If the image is not fully opaque, call the fadeIn function again after 30 milliseconds
  if (element.style.opacity < 1) {
    setTimeout(function() {
      fadeIn(element);
    }, 30);
  }
}

// Call the fadeIn function with the image element as the argument
fadeIn(image);


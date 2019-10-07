

function init() {
    let navButton = document.getElementById('menuButton');
    let menu = document.getElementById('menuOptions');
    let closeMenu = document.getElementById('closeMenu');
    let hideBlurbBtn = document.getElementById('hideBlurb');
	let showHideBlurb = document.getElementById('showHideBlurb');
    let blurbSection = document.getElementById('blurbSection');
    navButton.addEventListener("mouseover", function() {
        menu.classList.remove("hide");
        menu.classList.add("show");
    });
    navButton.addEventListener("touchstart", function() {
        menu.classList.remove("hide");
        menu.classList.add("show");
    });
    closeMenu.addEventListener("click", function() {
        menu.classList.add("hide");
        menu.classList.remove("show");
    });
    closeMenu.addEventListener("touchend", function() {
        menu.classList.add("hide");
        menu.classList.remove("show");
    });
	showHideBlurb.addEventListener("click", function() {
        blurbSection.classList.toggle("hide");
    });
    showHideBlurb.addEventListener("touchend", function() {
        blurbSection.classList.toggle("hide");
    });
    hideBlurbBtn.addEventListener("click", function() {
        blurbSection.classList.add("hide");
        blurbSection.classList.remove("show");
    });
    handleNavMenu();


}
let currentLocation = "";
let slideIndex = 1;
let menuHandlerInitialized = false;

let handleNavMenu = () => {
    let navMenu = document.getElementById("menuOptions");
    let navImage = document.getElementById("navImg");
    let navLists = document.querySelectorAll(".nav-list li");
        /* Hide nav map when Menu section is not active */
        navMenu.addEventListener("mouseleave", function() {
            
            if(navImage.classList.contains("show")) {
                navImage.classList.add("hide");
                navImage.classList.remove("show");
                }
            }
        );
    Array.from(navLists).forEach((list) => {
        list.addEventListener('mouseenter', onSelectNavList);
      });
      navLists = '';
    }

let onSelectNavList = (evt) =>  {
    let navImage = document.getElementById("navImg");
    if(navImage.classList.contains("hide")) {
        navImage.classList.add("show");
        navImage.classList.remove("hide");
        }
        
    let newLocation = document.querySelector(`#${evt.target.dataset.location}`);
    if(newLocation.classList.contains("hide")) {
        newLocation.classList.add("show");
        newLocation.classList.remove("hide");
        }
        if(currentLocation && currentLocation.id !== newLocation.id) {
            currentLocation.classList.add("hide");
            currentLocation.classList.remove("show");
        }
        currentLocation = newLocation;
}
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


init();
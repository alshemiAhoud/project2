/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
// build the nav
const mynav = document.getElementById('yTopnav');

const list = document.createElement('li');
list.innerHTML='<a href="#section1"> section1 </a>';
mynav.appendChild(list);


const mynav1 = document.getElementById('yTopnav'); 
const list1 = document.createElement('li');
list1.innerHTML='<a href="#section2"> section2 </a>';
mynav1.appendChild(list1);

const mynav2 = document.getElementById('yTopnav'); 
const list2 = document.createElement('li');
list2.innerHTML='<a href="#section3"> section3 </a>';
mynav2.appendChild(list2);

const mynav3 = document.getElementById('yTopnav'); 
const list3 = document.createElement('li');
list3.innerHTML='<a href="#section4"> section4 </a>';
mynav3.appendChild(list3);

// active on click

$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    }
  });
});

const btnContainer = document.getElementById("myTopnav");
const btns = btnContainer.querySelectorAll('a');


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
    
  });
}



// Add class 'active' to section when near top of viewport
// Scroll to section on link click

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      let target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});


function onScroll(event){
  let scrollPos = $(document).scrollTop();
  $('#yTopnav a').each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#topnav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


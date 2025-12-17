//active-links
var sections = document.getElementsByTagName("section");
var links = document.getElementsByTagName("a");


for (var i = 0; i < links.length; i++) {
    if (!links[i].classList.contains("inactive") && !links[i].classList.contains("active")) {
        links[i].classList.add("inactive");
    }
}

window.addEventListener("scroll", function () {
    var current = "";

    for (var j = 0; j < sections.length; j++) {
        var sectionTop = sections[j].offsetTop;

        if (scrollY >= sectionTop) {
            current = sections[j].id;
        }
    }

    for (var k = 0; k < links.length; k++) {
    
        if (links[k].classList.contains("active")) {
            links[k].classList.replace("active", "inactive");
        }

        if (links[k].getAttribute("href") === "#" + current) {
            links[k].classList.replace("inactive", "active");
        }
    }
});


//dark and light mode
var change = document.querySelector("#theme-toggle-button");

change.addEventListener("click", function(e) {
   
    var html = document.documentElement;

    if (html.classList.contains("dark")) {
      
        html.classList.replace("dark", "light");
    } else if (html.classList.contains("light")) {
  
        html.classList.replace("light", "dark");
    } else {
    
        html.classList.add("dark");
    }
});

//nav and taps


var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");


for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
   
    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
      filterButtons[j].setAttribute("aria-pressed", "false");
    }

    
    this.classList.add("active");
    this.setAttribute("aria-pressed", "true");


    var filter = this.getAttribute("data-filter");

    for (var k = 0; k < portfolioItems.length; k++) {
      var item = portfolioItems[k];
      var category = item.getAttribute("data-category");

   
      if (filter === "all" || filter === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none"; 
      }
    }
  });
}



//testmonials

var cards = document.querySelectorAll(".testimonial-card");
var next = document.querySelector("#next-testimonial");
var prev = document.querySelector("#prev-testimonial");


var visible = 3;
var startIndex = 0;

function updateCards() {
    for (var i = 0; i < cards.length; i++) {
        if (i >= startIndex && i < startIndex + visible) {
    
            cards[i].classList.replace("hidden", "flex");
        } else {
          
            cards[i].classList.replace("flex", "hidden");
        }
    }


}


next.addEventListener("click", function(e) {
    if (startIndex < cards.length - visible) {
        startIndex++;
        updateCards();
    }
});

prev.addEventListener("click", function(e) {
    if (startIndex > 0) {
        startIndex--;
        updateCards();
    }
});


// setting
 


var toggleBtn = document.querySelector("#settings-toggle");
var sidebar = document.querySelector("#settings-sidebar");
var closeBtn = document.querySelector("#close-settings");
var fontButtons = document.querySelectorAll(".font-option");
var resetBtn = document.querySelector("#reset-settings");


document.addEventListener("click", function(e){
  var target = e.target.closest("#settings-toggle, #close-settings");

  if(!target) return;


  if(target.id === "settings-toggle") {
    sidebar.className = sidebar.className.replace(" translate-x-full", "");
    sidebar.removeAttribute("aria-hidden");
    sidebar.removeAttribute("inert");
    toggleBtn.setAttribute("aria-expanded", "true");
  }


  if(target.id === "close-settings") {
    if(sidebar.className.indexOf("translate-x-full") === -1){
      sidebar.className += " translate-x-full";
    }
    sidebar.setAttribute("aria-hidden", "true");
    sidebar.setAttribute("inert", "");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.focus();
  }
});

for(var i=0; i<fontButtons.length; i++){
  fontButtons[i].addEventListener("click", function(){
    for(var j=0; j<fontButtons.length; j++){
      fontButtons[j].className = fontButtons[j].className.replace(" active", "");
      fontButtons[j].setAttribute("aria-checked", "false");
    }
    this.className += " active";
    this.setAttribute("aria-checked", "true");
    document.body.style.fontFamily = this.getAttribute("data-font");
  });
}

resetBtn.addEventListener("click", function(){

  document.body.style.fontFamily = "";
  for(var i=0; i<fontButtons.length; i++){
    fontButtons[i].className = fontButtons[i].className.replace(" active", "");
    fontButtons[i].setAttribute("aria-checked", "false");
  }


  if(sidebar.className.indexOf("translate-x-full") === -1){
    sidebar.className += " translate-x-full";
  }
  sidebar.setAttribute("aria-hidden", "true");
  sidebar.setAttribute("inert", "");
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.focus();
});


for(var i=0; i<fontButtons.length; i++){
  var btn = fontButtons[i];
  
  if(btn.getAttribute("data-font") === "tajawal"){
    btn.className += " active";
    btn.setAttribute("aria-checked", "true");
    document.body.style.fontFamily = "tajawal";
  } else {
    btn.className = btn.className.replace(" active", "");
    btn.setAttribute("aria-checked", "false");
  }
}



//scroll up

var btn;

document.addEventListener("DOMContentLoaded", function () {
  btn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.remove("opacity-0", "invisible");
    } else {
      btn.classList.add("opacity-0", "invisible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

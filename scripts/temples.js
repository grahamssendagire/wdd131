document.addEventListener("DOMContentLoaded", function() {  
    const hamburger = document.getElementById("hamburger");  
    const navMenu = document.getElementById("nav-menu");  

    hamburger.addEventListener("click", function() {  
        navMenu.classList.toggle("show");  
        if (navMenu.classList.contains("show")) {  
            hamburger.textContent = '✖'; // Change to 'X' when open  
        } else {  
            hamburger.textContent = '☰'; // Change back to hamburger when closed  
        }  
    });  
});  
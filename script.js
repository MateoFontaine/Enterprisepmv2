const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle mobile menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Handle dropdown functionality for mobile
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            const isActive = dropdown.classList.contains("active");
            closeAllDropdowns();
            if (!isActive) {
                dropdown.classList.add("active");
                dropdown.querySelector(".dropdown-menu").style.display = "block";
            }
        }
    });
});

// Close mobile menu when clicking on a non-dropdown nav link
navLink.forEach(n => n.addEventListener("click", function() {
    if (!this.parentElement.classList.contains("dropdown")) {
        closeMenu();
    }
}));

function closeMenu() {
    if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        closeAllDropdowns();
    }
}

function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove("active");
        dropdown.querySelector(".dropdown-menu").style.display = "none";
    });
}

// Prevent closing the dropdown menu when clicking inside on mobile
dropdowns.forEach(dropdown => {
    dropdown.querySelector(".dropdown-menu").addEventListener("click", function(e) {
        e.stopPropagation();
    });
});

// Handle dropdown functionality for desktop
dropdowns.forEach(dropdown => {
    dropdown.querySelector(".nav-link").addEventListener("click", function(e) {
        if (window.innerWidth > 768) {
            e.preventDefault();
            const isActive = dropdown.classList.contains("active");
            closeAllDropdowns();
            if (!isActive) {
                dropdown.classList.add("active");
                dropdown.querySelector(".dropdown-menu").style.display = "block";
            }
        }
    });
});


const faqsTitles = document.querySelectorAll(".faq .head");

faqsTitles.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.parentNode.classList.toggle("active");
        
        const faqContent = faq.nextElementSibling;

        if (faq.parentNode.classList.contains("active")) {
            faqContent.style.height = (faqContent.scrollHeight + 30) + "px";
        } else {
            faqContent.style.height = "0px";
        }
    });
});



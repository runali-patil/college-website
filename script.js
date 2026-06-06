// ==============================
// Smooth Scroll Navigation
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// ==============================
// Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        topBtn.style.display =
        window.scrollY > 400 ? "block" : "none";

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==============================
// Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
'.section, .card, .vision-card, .mission-card, .governing-card, .seat-card, .direct-second-year'
);

const revealOnScroll = () => {

    revealElements.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==============================
// Automatic Academic Year
// ==============================

const yearElement =
document.getElementById("academicYear");

if(yearElement){

    const currentYear =
    new Date().getFullYear();

    const nextYear =
    currentYear + 1;

    yearElement.textContent =
    `${currentYear}-${String(nextYear).slice(-2)}`;

}


// ==============================
// Active Navbar Highlight
// ==============================

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
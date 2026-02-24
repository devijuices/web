// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ================= REVEAL ON SCROLL =================
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// ================= PARALLAX EFFECT =================
const layers = document.querySelectorAll(".parallax-layer");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach((layer, index) => {
        const depth = (index + 1) * 10;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});

console.log("scripts.js is loaded and running!");

// Add hover effect on CTA buttons
document.querySelectorAll(".cta").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Handle Join Revolution Button Click
document.getElementById("join-revolution-btn").addEventListener("click", () => {
    alert("Thanks for joining the revolution! Stay tuned for updates.");
});

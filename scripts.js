document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");

    // Adding animation classes after loading
    document.querySelectorAll("h1, h2, p").forEach((el) => {
        el.classList.add("fade-in");
    });
});

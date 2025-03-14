document.addEventListener("DOMContentLoaded", () => {
    const formPopup = document.getElementById("form-popup");
    const ctaButtons = document.querySelectorAll(".cta");
    const closeBtn = document.querySelector(".close-btn");

    ctaButtons.forEach(button => {
        button.addEventListener("click", openForm);
    });

    closeBtn.addEventListener("click", closeForm);

    function openForm() {
        formPopup.style.display = "block";
        formPopup.classList.add("show");
    }

    function closeForm() {
        formPopup.style.display = "none";
        formPopup.classList.remove("show");
    }

    window.addEventListener("click", (event) => {
        if (event.target == formPopup) {
            formPopup.style.display = "none";
        }
    });
});

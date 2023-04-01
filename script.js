const hamburger = document.querySelector(".hamburger");
const hamburgerItems = document.querySelectorAll(".hamburger-item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    hamburgerItems.forEach((hamburgerItem) => hamburgerItem.classList.toggle("active"))

    console.log("clicked");
})


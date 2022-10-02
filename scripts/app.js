const btn = document.querySelector(".Theme");
const theme = document.querySelector("#theme-link");
const content = document.querySelector(".Content")
const navbar = document.querySelector(".Navbar");
const info = document.querySelector("#Info");
const photo = document.querySelector(".Photo")

btn.addEventListener("click", function () {
    theme.getAttribute("href") == "./styles/light.css" ? theme.href = "./styles/dark.css" : theme.href = "./styles/light.css";
});

function clipContent() {
    var navigation = navbar.getBoundingClientRect().bottom - content.getBoundingClientRect().y;

    if (photo.getBoundingClientRect().bottom - navbar.getBoundingClientRect().bottom <
            1.5 * navbar.getBoundingClientRect().bottom) {
            navigation = photo.getBoundingClientRect().bottom > 0 ? photo.getBoundingClientRect().bottom + navigation
                    : navigation;
    }
    if (info.getBoundingClientRect().bottom > photo.getBoundingClientRect().bottom
            && info.getBoundingClientRect().bottom - navbar.getBoundingClientRect().bottom <
            1.5 * navbar.getBoundingClientRect().bottom) {
        navigation = info.getBoundingClientRect().bottom > 0 ? info.getBoundingClientRect().bottom + navigation
                    : navigation;
    }

    content.style.clipPath = "inset(" + navigation + "px 0 0 0)";
}

window.addEventListener("scroll", clipContent);

window.addEventListener("resize", clipContent);

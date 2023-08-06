export default function scrollUpButton() {
    const scrollUpButton = document.querySelector("#scroll-button");
    const maxScrollHeight = 400;
    if(document.body.scrollTop > maxScrollHeight || document.documentElement.scrollTop > maxScrollHeight) {
        scrollUpButton.classList.remove("hidden");
    } else {
        scrollUpButton.classList.add("hidden");
    }
};
export default function ScrollUpReveal() {
    const scrollUpButton = document.querySelector("#scroll-button");

    scrollUpButton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

}
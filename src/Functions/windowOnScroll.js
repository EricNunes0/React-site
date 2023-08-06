import scrollUpButton from "./scrollUpButton";
import revealAnimation from "./revealAnimation";

export default function windowOnScroll() {
    window.onscroll = () => {
        scrollUpButton();
        revealAnimation();
    };
};
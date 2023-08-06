export default function revealAnimation() {
    let screenHeight = window.screen.height;
    const revealBottom = document.querySelectorAll(".reveal-bottom");
    revealBottom.forEach((reveal) => {
        const revealSets = reveal.getBoundingClientRect();
        const revealTop = revealSets.top;
        if(revealTop < (screenHeight - (screenHeight / 3.8))) {
            reveal.style.opacity = 1;
            if(reveal.style.animation.length === 0) {
                reveal.style.animation = `RevealBottom 0.3s ease-out`;
            };
        } else {
            reveal.style.animation = `none`;
            reveal.style.opacity = 0;
            reveal.style.removeProperty(`animation`);
        }
    });
};
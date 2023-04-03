function DataAnimeLoad() {
    const targets = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    function animationScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
        //console.log(windowTop, targets);
        targets.forEach(function(e) {
            //console.log(`Windowtop`, e.offsetTop);
            if(windowTop > e.offsetTop) {
                e.classList.add(animationClass);
            } else {
                e.classList.remove(animationClass);
            };
        });
    };

    window.addEventListener('scroll', function () {
        animationScroll();
    });
};

export default DataAnimeLoad;
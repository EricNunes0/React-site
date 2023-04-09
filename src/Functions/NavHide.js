function NavHide() {
    let navs = document.getElementsByClassName('nav-bar');
    for(let i = 0; i <= navs.length - 1; i++) {
        if(navs[i].className === `nav-bar opened`) {
            navs[i].className = `nav-bar closed`;
            let arrowImg = document.getElementById('nav-button-image');
            arrowImg.style.transform = "rotate(180deg)";
        } else {
            navs[i].className = `nav-bar opened`;
            let arrowImg = document.getElementById('nav-button-image');
            arrowImg.style.transform = "rotate(0deg)";
        }
    }
}

export default NavHide;
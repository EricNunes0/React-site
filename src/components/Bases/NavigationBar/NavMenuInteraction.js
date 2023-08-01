export default function NavMenuInteraction() {
    let menus = document.getElementsByClassName('navigation-menu-div');
    for(let i = 0; i <= menus.length - 1; i++) {
        let button = document.getElementById('navigation-bar-button');
        let icon = document.getElementById('navigation-bar-menu-icon');
        if(menus[i].className === `navigation-menu-div closed`) {
            menus[i].className = `navigation-menu-div opened`;
            button.style["background-color"] = "#fff";
            icon.style.filter = "invert(1)";
        } else if(menus[i].className === `navigation-menu-div opened`) {
            menus[i].className = `navigation-menu-div closed`;
            button.style["background-color"] = "rgba(0, 0, 0, 0)";
            icon.style.filter = "invert(0)";
        }
    };
};
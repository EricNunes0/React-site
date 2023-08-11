export default function OpenPanel({cat}) {
    const categories = document.querySelectorAll(".commands-categories");
    const buttons = document.querySelectorAll('.categorie-buttons');
    for(let i = 0; i <= categories.length - 1; i++) {
        if(i === cat.id) {
            categories[i].classList.add(`on`);
            categories[i].classList.remove(`off`);
            buttons[i].classList.add(`on`);
            buttons[i].classList.remove(`off`);
        } else {
            categories[i].classList.remove(`on`);
            categories[i].classList.add(`off`);
            buttons[i].classList.remove(`on`);
            buttons[i].classList.add(`off`);
        }
    };
    document.getElementById('commands-panel-header-title').innerHTML = cat.ptName;
};
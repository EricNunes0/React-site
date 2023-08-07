const categorieNames = [
    "Moderação", "Diversão", "Ações", "Utilidades", "Photoshop", "Diversos", "Economia", "Social", "Configuração"
]

export default function OpenPanel({cat}) {
    const panels = document.querySelectorAll('.commands-panels');
    for(let i = 0; i <= panels.length - 1; i++) {
        if(i === cat) {
            panels[i].classList.add(`on`);
            panels[i].classList.remove(`off`);
        } else {
            panels[i].classList.remove(`on`);
            panels[i].classList.add(`off`);
        }
    }
    const buttons = document.querySelectorAll('.categorie-buttons');
    for(let i = 0; i < buttons.length; i++) {
        if(i === cat) {
            buttons[i].classList.add(`on`);
            buttons[i].classList.remove(`off`);
        } else {
            buttons[i].classList.remove(`on`);
            buttons[i].classList.add(`off`);
        } 
    }
    document.getElementById('commands-panel-header-title').innerHTML = `${categorieNames[cat]}`;
};
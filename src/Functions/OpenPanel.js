function OpenPanel({cat}) {
    const panels = document.getElementsByClassName('commands-panels');
    for(let i = 0; i <= panels.length - 1; i++) {
        let panelClass = panels[i].className;
        console.log(panelClass);
        if(i === cat) {
            panels[i].className = `commands-panels panel-on`;
        } else {
            panels[i].className = `commands-panels panel-off`;
        }
    }
    const buttons = document.getElementsByClassName('categorie-buttons');
    for(let i = 0; i < buttons.length; i++) {
        let buttonClass = buttons[i].className;
        console.log(buttonClass);
        if(i === cat) {
            buttons[i].className = `categorie-buttons button-on`;
        } else {
            buttons[i].className = `categorie-buttons button-off`;
        } 
    }
}

export default OpenPanel;
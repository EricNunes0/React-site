function CommandBarsActive({cat, id}) {
    let title = document.getElementById(`command-${cat}-${id}`);
    console.log(title);
    let itemClass = title.className;
    if(itemClass === 'commands-bars close') {
        title.className = 'commands-bars open';
    } else {
        title.className = 'commands-bars close';
    }
}

export default CommandBarsActive;
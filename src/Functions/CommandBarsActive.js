function CommandBarsActive({id}) {
    let title = document.getElementById(`moderation-command-${id}`);
    let itemClass = title.className;
    if(itemClass === 'moderation-commands-bars close') {
        title.className = 'moderation-commands-bars open';
    } else {
        title.className = 'moderation-commands-bars close';
    }
}

export default CommandBarsActive;
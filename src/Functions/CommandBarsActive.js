function CommandBarsActive() {
    console.log("GAS GAG ADA")
    let moderationCommandTitles = document.getElementsByClassName(`moderation-commands-titles`);
    for(let i = 0; i <= moderationCommandTitles.length - 1; i++) {
        moderationCommandTitles[i].addEventListener('click', toggleItem, false);
    };
    function toggleItem() {
        let itemClass = this.parentNode.className;
        if(itemClass === 'moderation-commands-bars close') {
            this.parentNode.className = 'moderation-commands-bars open';
        } else {
            this.parentNode.className = 'moderation-commands-bars close';
        }
    }
}

export default CommandBarsActive;
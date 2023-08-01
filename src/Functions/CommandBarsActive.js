export default function CommandBarsActive({cat, id}) {
    let title = document.getElementById(`content-${cat}-${id}`);
    let infos = document.getElementById(`infos-${cat}-${id}`);
    let itemClass = title.classList;
    if(itemClass.contains('closing')) {
        return;
    };
    if(itemClass.contains('close')) {
        title.classList.remove('close');
        infos.classList.remove('close');
        title.classList.add('opening');
        setTimeout(function() {
            title.classList.remove('opening');
            title.classList.add('open');
        }, 300);
    } else {
        title.classList.remove('open');
        title.classList.add('closing');
        infos.classList.add('closing');
        setTimeout(function() {
            title.classList.remove('closing');
            infos.classList.remove('closing');
            title.classList.add('close');
            infos.classList.add('close');
        }, 300);
    }
};
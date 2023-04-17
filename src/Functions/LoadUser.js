import config from '../config.json';

function LoadUser() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if(!accessToken) {
        return window.location.replace(config.oAuthURL);;
    };

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    }).then(result => result.json()).then((response) => {
        const { id, username, discriminator, avatar } = response;
        console.log(response);
        document.getElementsByClassName('nav-page')[0].style.display = "none";
        document.getElementById('user-name').innerText = ` ${username}#${discriminator}`;
        document.getElementById('user-icon').src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=256`;
    }).catch((e) => {
        console.error(e);
    });
};

export default LoadUser;
export default function HideAllCommands() {
    const commandBars = document.querySelectorAll(".command-bars");
    for(const commandBar of commandBars) {
        commandBar.classList.add("hide")
    };
};
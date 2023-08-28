export default function ShowAllCommands() {
    const commandBars = document.querySelectorAll(".command-bars");
    for(const commandBar of commandBars) {
        commandBar.classList.remove("hide")
    };
};
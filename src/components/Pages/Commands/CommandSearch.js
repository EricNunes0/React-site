import commandsJSON from "../../../Settings/commands.json";
import HideAllCommands from "./HideAllCommands";
import ShowAllCommands from "./ShowAllCommands";

export default function CommandSearch() {
    ShowAllCommands();
    let searchInput = document.querySelector("#search-input").value;
    if(searchInput) {
        console.log(searchInput);
        HideAllCommands();
        for(let categorie of commandsJSON.categories) {
            for(let command of categorie.commands) {
                let aliases = [command.ptName];
                for(let aliase of command.aliases) {
                    aliases.push(aliase);
                };
                for(let aliase of aliases) {
                    if(aliase.includes(searchInput)) {
                        //console.log(command)
                        const commandToShow = document.querySelector(`#command-${categorie.id}-${command.id}`).classList.remove("hide");
                    };
                };
            };
        };
    };
};
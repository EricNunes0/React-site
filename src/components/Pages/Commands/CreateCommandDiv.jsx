import CommandBarsActive from "../../../Functions/CommandBarsActive";
import commandsJSON from "../../../Settings/commands.json";
import CreateExampleDiv from "./CreateExampleDiv";
import CreatePermissionsDiv from "./CreatePermissionsDiv";

export default function CreateCommandDiv({categorie, command}) {

    const prefix = commandsJSON.prefix;
    let aliases = [];
    for(let aliase of command.aliases) {
        aliases.push(`${prefix}${aliase}`);
    };
    let botPerms = [];
    let userPerms = [];
    for(let perm of command.ptBotPermissions) {
        botPerms.push(`${perm.toLocaleUpperCase()}`);
    };
    for(let perm of command.ptUserPermissions) {
        userPerms.push(`${perm.toLocaleUpperCase()}`);
    };

    return(
        <div className = "command-bars" id = {`command-${categorie.id}-${command.id}`}>
            <div className = "commands-titles-divs" id = {`commands-title-${categorie.id}-${command.id}`} onClick = {() => {CommandBarsActive({cat: categorie.id, id: command.id})}}>
                <div className = {`categorie-label-divs c${categorie.id}`} id = {`categorie-label-${categorie.id}-${command.id}`}>
                    <label className = "categorie-labels">{categorie.ptName}</label>
                </div>
                <h2 className = {`commands-titles text-decoration-underline-${categorie.id}`}>{prefix}{command.ptName}</h2>
            </div>
            <div className = "commands-content close" id = {`content-${categorie.id}-${command.id}`}>
                <div className = "content-absolute"></div>
                <div className = "content-infos close" id = {`infos-${categorie.id}-${command.id}`}>
                    <div className = "commands-descriptions-title-div">
                        <h4 className = "commands-descriptions-titles">Descrição</h4>
                    </div>
                    <div className = "commands-descriptions-div">
                        <p className = "commands-descriptions" id = {`commands-description-${categorie.id}-${command.id}`}>{command.ptDescription}</p>
                    </div>
                    <hr className = "hr-color-gray"></hr>
                    <div className = "commands-aliases-flex">
                        <div className = "aliases-title">
                            <h4 className = "commands-aliases-titles">Sinônimos</h4>
                        </div>
                        <div className = "aliases-list-div">
                            <p className = "commands-aliases">{aliases.join(", ")}</p>
                        </div>
                    </div>
                    <hr className = "hr-color-gray"></hr>
                    <div className = "commands-use-flex">
                        <div className = "use-flex">
                            <h4 className = "commands-use-titles">Como usar</h4>
                        </div>
                        <div className = "use-div">
                            <p className = "commands-use">{prefix}{command.ptHowToUse}</p>
                        </div>
                    </div>
                    <CreateExampleDiv command = {command}/>
                    <CreatePermissionsDiv command = {command}/>
                </div>
            </div>
        </div>
    );
};
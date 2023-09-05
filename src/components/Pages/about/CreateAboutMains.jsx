import commandsJSON from "../../../Settings/commands.json";
import CreateAboutMainSections from "./CreateAboutMainSections";

export default function CreateAboutMains() {
    let rows = [];
    for(const categorie of commandsJSON.categories) {
        if(categorie.panel) {
            rows.push(CreateAboutMainSections({panel: categorie.panel}));
        };
    };

    return (
        <div id = "about-panel-div">
            {rows}
        </div>
    )
};
import commandsJSON from "../../../Settings/commands.json";
import CreateCategorieButton from "./CreateCategorieButton";

export default function CreateCategorieButtons() {
    let rows = [];
    for(let categorie of commandsJSON.categories) {
        rows.push(CreateCategorieButton({cat: categorie}));
    };
    return(
        <div id = "categorie-board-buttons-main">
            {rows}
        </div>
    );
};
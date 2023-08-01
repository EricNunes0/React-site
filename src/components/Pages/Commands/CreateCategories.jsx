import CreateCategorieDiv from "./CreateCategorieDiv";
import commandsJSON from "../../../Settings/commands.json";

export default function CreateCategories() {
    let rows = [];
    for(const cat of commandsJSON.categories) {
        rows.push(CreateCategorieDiv({categorie: cat}));
    };
    return(
        <div>
            {rows}
        </div>
    );
};
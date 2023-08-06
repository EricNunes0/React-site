import commandsJSON from "../../../Settings/commands.json";
import CreateIntroductionCategorie from "./CreateIntroductionCategorie";

export default function CreateIntroductionCategories() {
    let rows = [];
    commandsJSON.categories.forEach((categorie) => {
        rows.push(CreateIntroductionCategorie({index: categorie.id}));
    });

    return (
        <div id = "introduction-categories-main-div">
            {rows}
        </div>
    )
};
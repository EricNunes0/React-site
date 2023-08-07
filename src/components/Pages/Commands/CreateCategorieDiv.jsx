import CreateCommandDiv from "./CreateCommandDiv";

export default function CreateCategorieDiv({categorie}) {
    let rows = [];
    for(const cmd of categorie.commands) {
        rows.push(CreateCommandDiv({categorie: categorie, command: cmd}));
    };

    return(
        <div className = "commands-categories" id = {`categorie-${categorie.id}`}>
            {rows}
        </div>
    );
};
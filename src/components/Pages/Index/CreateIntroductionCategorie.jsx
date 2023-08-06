import commandsJSON from "../../../Settings/commands.json";

export default function CreateIntroductionCategorie({index}) {
    let foundCategorie;
    for(let cat of commandsJSON.categories) {
        if(cat.id === index) {
            foundCategorie = cat;
        };
    };
    return (
        <div className = "introduction-categories-flex reveal-bottom" id = {`categorie-${foundCategorie.id}`}>
            <div className = "display-flex-row">
                <section className = "categorie-image-section">
                    <div className = "categorie-icons">
                        <img src = {foundCategorie.icon} alt = {foundCategorie.letter} className = "index-icons"></img>
                    </div>
                </section>
                <section className = "categorie-title-section">
                    <h3 className = {`categorie-titles font-color-white fd-underline-${foundCategorie.id}`}>{foundCategorie.ptName}</h3>
                </section>
            </div>
            <section className = "categorie-description-section">
                <p className = "categorie-descriptions ta-justify">{foundCategorie.ptDescription}</p>
            </section>
        </div>
    )
};
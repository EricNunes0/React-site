import OpenPanel from "../../../Functions/OpenPanel";

export default function CreateCategorieButton({cat}) {
    return(
        <div className = "categorie-button-div" id = {`categorie-${cat.id}`} key = {`categorie-${cat.id}`}>
            <button type = "button" className = "categorie-buttons off" id = {`categorie-button-${cat.id}`} key = {`categorie-button-${cat.id}`} onClick = {() => {OpenPanel({cat: cat})}}>
                <div className = "categorie-buttons-texts-div">
                    <div className = "categorie-buttons-name-divs">
                        <h4 className = "categorie-buttons-texts">{cat.ptName}</h4>
                    </div>
                    <div className = "categorie-buttons-count-divs">
                        <p className = "categorie-buttons-texts">{cat.commands.length}</p>
                    </div>
                </div>
                <div className = "categorie-buttons-icons-div">
                    <img className = "categorie-buttons-icons" src = {`${cat.icon}`} alt = {cat.id}></img>
                </div>
            </button>
        </div>
    )
};
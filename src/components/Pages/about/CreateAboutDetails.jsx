import CreateAboutDetail from "./CreateAboutDetail";

export default function CreateAboutDetails() {
    let rows = [];
    let details = ["Fácil de usar", "Prático e rápido", "Diversão na certa", "Diversas funcionalidades"];

    details.forEach((detail) => {
        rows.push(CreateAboutDetail({detail: detail}));
    });
    return (
        <div id = "about-details-div">
            {rows}
        </div>
    );
};
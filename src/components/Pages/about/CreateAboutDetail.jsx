export default function CreateAboutDetail({detail}) {
    return (
        <div className = "about-details">
            <div className = "about-details-icons-divs">
                <img className = "about-details-icons" src = "svgs/redCheck.svg"></img>
            </div>
            <div className = "about-details-texts-divs">
                <span className = "about-details-texts">{detail}</span>
            </div>
        </div>
    );
};
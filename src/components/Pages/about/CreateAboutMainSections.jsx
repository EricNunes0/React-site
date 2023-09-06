export default function CreateAboutMainSections({panel}) {
    let sectionClass = "about-main-sections reveal-bottom";
    if(panel.reverse === true) {
        sectionClass = `${sectionClass} reverse`;
    };

    return(
        <section className = {sectionClass}>
            <div className = "about-main-texts-divs">
                <div className = "about-main-titles-divs">
                    <div className = "about-main-titles-icons-divs">
                        <img className = "about-main-icons" src = {panel.icon}></img>
                    </div>
                    <div className = "about-main-titles-texts-divs">
                        <span className = "about-main-titles">{panel.name}</span>
                    </div>
                </div>
                <div className = "about-main-descriptions-divs">
                    <span className = "about-main-descriptions">{panel.description}</span>
                </div>
            </div>
            <div className = "about-main-images-divs">
                <img className = "about-main-images" src = {panel.image}></img>
            </div>
        </section>
    );
};
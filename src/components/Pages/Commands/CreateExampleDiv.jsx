export default function CreateExampleDiv({command}) {
    
    if(command.image) {
        return(
            <div className = "commands-example-divs">
                <hr className = "hr-color-gray"></hr>
                <div className = "example-title-div">
                    <h4 className = "commands-example-titles">Exemplo</h4>
                </div>
                <div className = "example-div">
                    <img src = {`${command.image}`} className = "example-image" id = {`${command.ptName}`} alt = {`${command.ptName}`}></img>
                </div>
            </div>
        );
    };
};
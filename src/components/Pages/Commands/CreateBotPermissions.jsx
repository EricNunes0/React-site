import CreateBotPermissionsButtons from "./CreateBotPermissionsButtons";

export default function CreateBotPermissions({command}) {
    if(command.ptBotPermissions.length >= 1) {
        return (
            <div className = "permissions-bot">
                <div className = "permissions-bot-title-div">
                    <h4 className = "permissions-bot-titles">Permissões do bot</h4>
                </div>
                <CreateBotPermissionsButtons command = {command}/>
            </div>
        );
    }
};
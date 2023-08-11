import CreatePermissions from "./CreatePermissions";

export default function CreatePermissionsDiv({command}) {
    if((command.ptBotPermissions.length >= 1) && (command.ptUserPermissions.length >= 1)) {
        return (
            <div className = "commands-permissions-flex">
                <hr className = "hr-color-gray"></hr>
                <div className = "permissions-title-div">
                    <h4 className = "commands-permissions-titles">Permissões necessárias</h4>
                </div>
                <div className = "permissions-flex">
                    <CreatePermissions command = {command}/>
                </div>
            </div>
        );
    };
};
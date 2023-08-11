import CreateUserPermissionsButtons from "./CreateUserPermissionsButtons";

export default function CreateUserPermissions({command}) {
    if(command.ptUserPermissions.length >= 1) {
        return (
            <div className = "permissions-user">
                <div className = "permissions-user-title-div">
                    <h4 className = "permissions-user-titles">Permissões do usuário</h4>
                </div>
                <CreateUserPermissionsButtons command = {command}/>
            </div>
        );
    };
};
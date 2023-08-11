import CreateBotPermissions from "./CreateBotPermissions";
import CreateUserPermissions from "./CreateUserPermissions";

export default function CreatePermissions({command}) {
    return (
        <div id = "permissions-div">
            <div className = "permissions-bot">
                <CreateBotPermissions command = {command}/>
            </div>
            <div className = "permissions-user">
                <CreateUserPermissions command = {command}/>
            </div>
        </div>
    );
};
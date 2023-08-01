import CreateBotPermissionsButton from "./CreateBotPermissionsButton";

export default function CreateBotPermissionsButtons({command}) {
    let rows = [];
    for(let perm of command.ptBotPermissions) {
        rows.push(CreateBotPermissionsButton({permission: perm}));
    };
    return(
        <div className = "permissions-bot-main-div">
            {rows}
        </div>
    );
};
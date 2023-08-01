import CreateUserPermissionsButton from "./CreateUserPermissionsButton";

export default function CreateUserPermissionsButtons({command}) {
    let rows = [];
    for(let perm of command.ptUserPermissions) {
        rows.push(CreateUserPermissionsButton({permission: perm}));
    };
    return(
        <div className = "permissions-user-main-div">
            {rows}
        </div>
    );
};
export default function CreateUserPermissionsButton({permission}) {
    return(
        <div className = "permissions-user-buttons-divs">
            <button className = "permissions-buttons">{permission}</button>
        </div>
    );
};
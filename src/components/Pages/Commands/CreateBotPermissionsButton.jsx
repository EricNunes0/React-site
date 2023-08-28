export default function CreateBotPermissionsButton({permission}) {
    return(
        <div className = "permissions-user-buttons-divs" key = {`${permission}`}>
            <button className = "permissions-buttons">{permission}</button>
        </div>
    );
};
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import Badgec from "./Badge";

function ProfileCard(){
    return(
        <article className="profile-card">
            <Avatar />
            <UserInfo />
            <Badgec />
        </article>
    )
}

export default ProfileCard
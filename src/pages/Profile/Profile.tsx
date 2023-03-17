import { useContext } from "react";
import { Context } from "../../AppContext";
import { ProfileBanner } from "./components/ProfileBanner";

export const Profile = () => {
    const { user } = useContext(Context);

    return (
        <div>
            <ProfileBanner user={user} />
        </div>
    )
}
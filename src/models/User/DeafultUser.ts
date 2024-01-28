import { UserProfile } from "@auth0/nextjs-auth0/client";
import { UserRequest } from "./UserRequest";

function createDefaultUser(user: UserProfile) : UserRequest {
    
    return {
        name: user.name ?? "",
        userName: user.name ?? "",
        email: user.email ?? "",
        profilePicture: user.picture ?? "",
    } as UserRequest;
}
export default createDefaultUser;

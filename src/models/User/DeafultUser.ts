import { UserProfile } from "@auth0/nextjs-auth0/client";
import { UserRequest } from "./UserRequest";

function createDefaultUser(user:UserProfile) : UserRequest {
    //need to keep tract if this is a users first time on the sight.
    //then promt them with a modal 
    return {
         name: user.name,
        userName: user.name,
        email: user.email,
        profilePicture: user.picture,
    } as UserRequest;
}
export default createDefaultUser;
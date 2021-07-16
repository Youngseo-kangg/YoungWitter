import { authService } from "myBase"
import React from "react"

const Profile = () => {
    const onLogOutClick = () => authService.signOut();
    // const history = useHistory()
    // const onLogOutClick = () => {
    //     authService.signOut();
    //     history.push("/")
    // }
    return <><button onClick={onLogOutClick}>Log Out</button></>
}
export default Profile
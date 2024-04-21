import localforage from "localforage";
import { authService } from "../../services/auth-services";
import { redirect } from "react-router-dom";

export async function action() {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    console.log(accessToken);
    await authService.logout(accessToken)
    localforage.setItem('userAuth',
        {
            username: '',
            accessToken: ''
        })
    return { userAuth }, redirect('/')
}

export function Logout() {
    return <></>
}
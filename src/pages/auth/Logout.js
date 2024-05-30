import localforage from "localforage";
import { authService } from "../../services/auth-services";
import { redirect } from "react-router-dom";

export async function action() {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    await authService.logout(accessToken)
    localforage.setItem('userAuth',
        {
            id: null,
            username: null,
            accessToken: null,
            message: 'user logout',
            success: false
        })
    return ({ userAuth }, redirect('/'))
}

export function Logout() {
    return <></>
}
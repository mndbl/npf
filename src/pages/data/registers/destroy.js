import { redirect } from "react-router-dom";
import { registers_URL } from "../../../config/main.config";
import localforage from "localforage";
import { dataService } from "../../../services/data-services";

export async function action({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('login')
    const id = params.id
    await dataService.destroyData(`${registers_URL}/destroy/${id}`, accessToken)
    window.location.reload()
    return redirect('/admin/registers')
}
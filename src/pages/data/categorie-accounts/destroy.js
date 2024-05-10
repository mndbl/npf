import localforage from "localforage";
import { redirect } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_categories_URL } from "../../../config/main.config";

export async function action({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('login')
    const id = params.id
    await dataService.destroyData(`${accounts_categories_URL}/destroy/${id}`, accessToken)
    window.location.reload()
    return redirect('/admin/categories-accounts')
}
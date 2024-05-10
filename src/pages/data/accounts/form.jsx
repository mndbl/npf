import localforage from "localforage";
import { AuthFormsWrap } from "../../../components/wraps/AuthFormsWrap";
import { redirect } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL } from "../../../config/main.config";

export async function action({ params, request }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('/login')
    const id = params.id
    const formData = await request.formData()
    const name = formData.get('category-account-name')
    const type = formData.get('select-type-of-category')
    const data = {
        type, name
    }
    if (id) {
        await dataService.updateData(`${accounts_URL}/update/${id}`,data, accessToken)
    } else {
        await dataService.addData(`${accounts_URL}/create`,data, accessToken)
    }
    return redirect('/admin/categories-accounts')

}

export function FormAccount() {
    return (
        <AuthFormsWrap captionForm="Accounts">

        </AuthFormsWrap>
    )
}
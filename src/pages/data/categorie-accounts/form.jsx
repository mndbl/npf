import localforage from "localforage";
import { Select } from "../../../components/inputs/Select";
import { AuthFormsWrap } from "../../../components/wraps/AuthFormsWrap";
import { InputGroup } from "../../../components/inputs/InputGroup";
import { GroupButton } from "../../../components/buttons/GroupButton";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_categories_URL } from "../../../config/main.config";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/loaders/loader";

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
        await dataService.updateData(`${accounts_categories_URL}/update/${id}`, data, accessToken)
    } else {
        await dataService.addData(`${accounts_categories_URL}/create`, data, accessToken)
    }
    return redirect('/admin/categories-accounts')

}

export function FormCategorieAccount() {
    const [method, setMethod] = useState('post')
    const { categoryAccount } = useLoaderData()
    const { id, name, type } = categoryAccount


    useEffect(() => {
        if (id) {
            setMethod('put')
        }
    }, [id])

    const typeOfAccounts = [
        {
            id: 1,
            name: 'balance sheet'
        },
        {
            id: 2,
            name: 'income statement'
        }
    ]

    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />

    return (
        <AuthFormsWrap captionForm="Categorie Account">
            <Form method={method} className="space-y-2">
                <Select
                    name='type-of-category'
                    labelName={'type of category'}
                    options={typeOfAccounts}
                    defaultVal={id ? type : ''}
                />
                <InputGroup
                    name='category-account-name'
                    type={'text'}
                    labelName={"Category Name"}
                    placeholder={'Enter category name'}
                    defaultVal={id ? name : ''}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}
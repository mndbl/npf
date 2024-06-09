import localforage from "localforage";
import { AuthFormsWrap } from "../../../components/wraps/AuthFormsWrap";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL } from "../../../config/main.config";
import { Select } from "../../../components/inputs/Select";
import { InputGroup } from "../../../components/inputs/InputGroup";
import { GroupButton } from "../../../components/buttons/GroupButton";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/loaders/loader";

export async function action({ params, request }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('/login')
    const id = params.id
    const formData = await request.formData()
    const name = formData.get('account-name')
    const account_category_id = formData.get('select-account-category')
    const estimated_budget_amount = formData.get('estimated-budget')
    const init_deb_balance = formData.get('initial-debit')
    const init_cre_balance = formData.get('initial-credit')
    const cut_off_date = formData.get('cut-off-date')

    const data = {
        name,
        account_category_id,
        estimated_budget_amount,
        init_deb_balance,
        init_cre_balance,
        cut_off_date,
    }
    console.log(data);
    if (id) {
        await dataService.updateData(`${accounts_URL}/update/${id}`, data, accessToken)
    } else {
        await dataService.addData(`${accounts_URL}/create`, data, accessToken)
    }
    return redirect("/admin/accounts")

}

export function FormAccount() {
    const { account, accountCategories } = useLoaderData()
    const [method, setMethod] = useState('post')
    const { id } = account
    useEffect(() => {
        if (id) {
            setMethod('put')
        }
    }, [id])
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
    return (
        <AuthFormsWrap captionForm="Accounts">
            <Form method={method}>
                <div className="grid grid-cols-2 gap-2">
                    <InputGroup
                        labelName={'name'}
                        placeholder={'add name'}
                        name={'account-name'}
                        defaultVal={account?.id ? account.name : ''}
                    />
                    <Select
                        name={'account-category'}
                        labelName={'account categories'}
                        options={accountCategories}
                        defaultVal={account?.id ? account.account_category : ''}
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">

                    <InputGroup
                        labelName={'estimated budget'}
                        type='number'
                        name={'estimated-budget'}
                        defaultVal={account?.id ? account.estimated_budget_amount : 0}

                    />
                    <InputGroup
                        labelName={'cut off date'}
                        type={"date"}
                        name={'cut-off-date'}
                        defaultVal={account?.id && account.cut_off_date}
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <InputGroup
                        labelName={'initial debit'}
                        type={'number'}
                        name={'initial-debit'}
                        defaultVal={account?.id ? account.init_deb_balance : 0}
                    />
                    <InputGroup
                        labelName={'initial credit'}
                        type={'number'}
                        name={'initial-credit'}
                        defaultVal={account?.id ? account.init_cre_balance : 0}
                    />
                </div>
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}
import localforage from "localforage"
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL, accounts_categories_URL } from "../../../config/main.config";
import { useMemo } from "react";
import { Table } from "../../../components/tables/Table";

export async function loader() {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login');
    const { accessToken } = userAuth.data || {}
    const accounts = await dataService.getData(`${accounts_URL}/index`, '', {}, accessToken)
    const accountsCategories = await dataService.getData(`${accounts_categories_URL}/index`, '', {}, accessToken)
    accounts.forEach(acc => {
        const categorie = accountsCategories.find(cat => cat.id == acc.account_category_id)
        acc.account_category_id = categorie.name

    });
    return { accounts }
}

const tableHeads = [
   
    {
        header: 'account category',
        accessor: 'account_category_id'
    },
    {
        header: 'account name',
        accessor: 'name',
    },
    {
        header: 'estimated budget',
        accessor: 'estimated_budget_amount'
    },
    {
        header: 'initial debit balance',
        accessor: 'init_deb_balance'
    },
    {
        header: 'initial credit balance',
        accessor: 'init_cre_balance'
    }
]

export function AccountsIndex() {
    const { accounts } = useLoaderData()

    const data = useMemo(() =>
        accounts
    )

    return (
        <Table
            captionTable="Accounts index"
            tableHeads={tableHeads}
            data={data}
        />
    )
}
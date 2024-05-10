import localforage from "localforage";
import { Table } from "../../../components/tables/Table";
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_categories_URL } from "../../../config/main.config";
import { useMemo } from "react";

export async function loader() {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login');
    const { accessToken } = userAuth.data
    const categories = await dataService.getData(`${accounts_categories_URL}/index`, '', {}, accessToken);
    return { categories }
}
const tableHeads = [
 
    {
        header: 'account name',
        accessor: 'name',
    },
    {
        header: 'type',
        accessor: 'type',
    },
]

export function CategoriesAccountsIndex() {
    const { categories } = useLoaderData()
    const data = useMemo(() => categories)
    return (
        <Table captionTable={'Categories Accounts '} index tableHeads={tableHeads} data={data} />
    )
}
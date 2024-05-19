import localforage from "localforage";
import { dataService } from "../../../services/data-services";
import { registers_URL } from "../../../config/main.config";
import { redirect, useLoaderData } from "react-router-dom";
import { Table } from "../../../components/tables/Table";
import {  useMemo } from "react";

export async function loader({ request }) {

    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login');
    const { accessToken } = userAuth.data
    const url = new URL(request.url)
    const q = url.searchParams.get('q')

    const registers = await dataService.getData(`${registers_URL}/index`, q, { keys: ['description'] }, accessToken)
    return { registers, q }
}

const tableHeads = [
    {
        header: 'date',
        accessor: 'date',
    },
    {
        header: 'description',
        accessor: 'description',
    },

    {
        header: 'amount',
        accessor: 'amount',
        type: 'amount'
    },
]

export function RegistersIndex() {
    const { registers, q } = useLoaderData()
    const data = useMemo(() => registers)

    

    return (
        <Table
            captionTable="Register index"
            tableHeads={tableHeads}
            data={data}
        />
    )

}
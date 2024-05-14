import localforage from "localforage";
import { dataService } from "../../../services/data-services";
import { registers_URL } from "../../../config/main.config";
import { useLoaderData } from "react-router-dom";
import { Table } from "../../../components/tables/Table";
import { useMemo } from "react";

export async function loader() {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return null;
    const { accessToken } = userAuth.data
    const registers = await dataService.getData(`${registers_URL}/index`, '', {}, accessToken)
    return { registers }
}

const tableHeads = [
    {
        header: 'id',
        accessor: 'id'
    },

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
    },
]

export function RegistersIndex() {
    const { registers } = useLoaderData()
    const data = useMemo(() => registers)
    return (
        <Table
            captionTable="Register index"
            tableHeads={tableHeads}
            data={data}
        />
    )

}
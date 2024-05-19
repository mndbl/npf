import localforage from "localforage";
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL, nf, registers_URL } from "../../../config/main.config";
import { SectionShowDetailsWrap } from "../../../components/wraps/SectionShowDetailsWrap";
import { useMemo } from "react";
import { Table } from "../../../components/tables/Table";

export async function loader({ params, request }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login')
    const { accessToken } = userAuth.data
    const url = new URL(request.url)
    const id = params.id
    const register = id ? await dataService.getDataId(`${registers_URL}/show/${id}`, accessToken) : {}
    const accounts = await dataService.getData(`${accounts_URL}/index`, '', {}, accessToken)
    if (id && url.pathname.slice(-4) != 'edit') {
        register.register_details.map(det =>
            det.account_id = accounts.find(acc => acc.id === det.account_id).name)
    }
    return { register, accounts, accessToken }
}
const tableHeads = [
    {
        header: 'account',
        accessor: 'account_id',
    },
    {
        header: 'debit',
        accessor: 'amount_deb',
        type: 'amount'
    },

    {
        header: 'credit',
        accessor: 'amount_cre',
        type: 'amount'
    },
]

export function RegisterShow() {
    const { register } = useLoaderData()
    const data = useMemo(() => register.register_details)
    return (
        <SectionShowDetailsWrap
            description={`register date: ${register.date}`}
            label={`${register.description} = ${nf.format(register.amount)}`}
            textButton={'see details'}
        >
            <Table
                captionTable="register details"
                tableHeads={tableHeads}
                data={data}
            />
        </SectionShowDetailsWrap>
    )
}
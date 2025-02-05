import localforage from "localforage";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { useMemo } from "react";
import { dataService } from "../../../../services/data-services";
import { accounts_URL, admin_URL, consults_URL, nf } from "../../../../config/main.config";
import { SectionShowDetailsWrap } from "../../../../components/wraps/SectionShowDetailsWrap";
import { Loader } from "../../../../components/loaders/loader";
import { Table } from "../../../../components/tables/Table";

export async function loader({ params, request }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login')
    const { accessToken } = userAuth.data
    const url = new URL(request.url)
    console.log('url' + url);
    const id = params.id
    const register = id ? await dataService.getDataId(`${admin_URL}/show/${id}`, accessToken) : {}
    
    const accounts = await dataService.getData(`${accounts_URL}/index`, '', {}, accessToken)
    if (id && url.pathname.slice(-4) !== 'edit') {
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

export function ShowHistoricalDetails() {
    const navigation = useNavigation()
    const { register } = useLoaderData()
    console.log('register', register)
    const { register_details } = register
    const data = useMemo(() => { return register_details }, [register_details])
    if (navigation.state === 'loading') return <Loader />

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
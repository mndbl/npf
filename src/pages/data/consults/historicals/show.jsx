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
    console.log('Loader - register:', register)

    const accounts = await dataService.getData(`${accounts_URL}/index`, '', {}, accessToken)
    if (id && url.pathname.slice(-4) !== 'edit') {
        register.register_details.map(det =>
            det.account_id = accounts.find(acc => acc.id === det.account_id).name)
    }
    console.log('Loader - register after mapping:', register)
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
    {
        header: 'balance',
        accessor: 'balance',
        type: 'amount'
    },
]

export function ShowHistoricalDetails() {
    console.log('ShowHistoricalDetails component rendered')
    const navigation = useNavigation()
    const { register } = useLoaderData()
    console.log('register', register)
    const { register_details } = register
    console.log('register_details:', register_details)

    const data = useMemo(() => {
        console.log('Inside data useMemo, register_details:', register_details)
        if (!register_details) return []
        const accountBalances = {}
        
        return register_details.map(detail => {
            const accountId = typeof detail.account_id === 'object' ? detail.account_id.name : detail.account_id
            const debit = typeof detail.amount_deb === 'number' ? detail.amount_deb : parseFloat(detail.amount_deb) || 0
            const credit = typeof detail.amount_cre === 'number' ? detail.amount_cre : parseFloat(detail.amount_cre) || 0
            
            // Initialize account balance if not exists
            if (!accountBalances[accountId]) {
                accountBalances[accountId] = 0
            }
            
            // Calculate running balance for this account (debit increases, credit decreases)
            accountBalances[accountId] += debit - credit
            
            return {
                ...detail,
                account_id: accountId,
                amount_deb: debit,
                amount_cre: credit,
                balance: accountBalances[accountId]
            }
        })
    }, [register_details])

    console.log('data inside component:', data)

    const { accountName, totalBalance } = useMemo(() => {
        console.log('Inside accountName useMemo, data:', data)
        if (!data || data.length === 0) return { accountName: '', totalBalance: 0 }
        
        // Get the first account name
        const firstAccountName = data[0].account_id
        console.log('firstAccountName:', firstAccountName)
        
        // Filter details for this account
        const accountDetails = data.filter(detail => detail.account_id === firstAccountName)
        
        // Get the final balance (last balance value for this account)
        const finalBalance = accountDetails.length > 0 ? accountDetails[accountDetails.length - 1].balance : 0
        console.log('finalBalance:', finalBalance)
        
        return { accountName: firstAccountName, totalBalance: finalBalance }
    }, [data])

    console.log('accountName:', accountName, 'totalBalance:', totalBalance)
    if (navigation.state === 'loading') return <Loader />
    
    return (
        <SectionShowDetailsWrap
            description={`Account Name: `}
            label={`${accountName} (${nf.format(totalBalance)})`}
            textButton={'see details'}
        >
            <div className="space-y-4">
                <Table
                    captionTable="register details"
                    tableHeads={tableHeads}
                    data={data}
                />
            </div>
        </SectionShowDetailsWrap>
    )
}
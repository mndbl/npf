import localforage from "localforage"
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL, accounts_categories_URL, registers_URL } from "../../../config/main.config";
import { useMemo } from "react";
import { Table } from "../../../components/tables/Table";

export async function loader({ request }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login');
    const { accessToken } = userAuth.data || {}
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    const accounts = await dataService.getData(`${accounts_URL}/index`, q, { keys: ['name'] }, accessToken)
    const accountsCategories = await dataService.getData(`${accounts_categories_URL}/index`, '', {}, accessToken)
    const registers = await dataService.getData(`${registers_URL}/index`, q, { keys: ['name'] }, accessToken)


    accounts?.forEach(acc => {
        const categorie = accountsCategories.find(cat => cat.id === acc.account_category_id)
        acc.account_category_id = categorie.name
        const registers_details = registers.map(reg => reg.register_details)
        const registerDebits = registers_details.filter(reg => {
            for (let index = 0; index < reg.length; index++) {
                if (reg[index].account_id === acc.id) {
                    if (reg[index].amount_deb > 0) {

                        return reg[index]
                    }
                }
                continue
            }
        }).reduce((prev, curr) => {
            for (let index = 0; index < curr.length; index++) {
                const element = curr[index];
                if (element.account_id === acc.id) {
                    return parseFloat(prev) + parseFloat(element.amount_deb)
                }
            }
        }, 0)
        const registerCredits = registers_details.filter(reg => {
            for (let index = 0; index < reg.length; index++) {
                if (reg[index].account_id === acc.id) {
                    if (reg[index].amount_cre > 0) {

                        return reg[index]
                    }
                }
                continue
            }
        }).reduce((prev, curr) => {
            for (let index = 0; index < curr.length; index++) {
                const element = curr[index];
                if (element.account_id === acc.id) {
                    return parseFloat(prev) + parseFloat(element.amount_cre)
                }
            }
        }, 0)
        acc.actual_balance = (parseFloat(acc.init_deb_balance) + registerDebits - parseFloat(acc.init_cre_balance) - registerCredits).toFixed(2)
    });


    return { accounts, q }
}

const tableHeads = [

    {
        header: 'account category',
        accessor: 'account_category_id',
        type: ''
    },
    {
        header: 'account name',
        accessor: 'name',
        type: ''
    },
    {
        header: 'estimated budget',
        accessor: 'estimated_budget_amount',
        type: 'amount'
    },
    {
        header: 'init deb balance',
        accessor: 'init_deb_balance',
        type: 'amount'
    },
    {
        header: 'init cre balance',
        accessor: 'init_cre_balance',
        type: 'amount'
    },
    {
        header: 'actual balance',
        accessor: 'actual_balance',
        type: 'amount'
    }
]

export function AccountsIndex() {
    const { accounts } = useLoaderData()

    const data = useMemo(() => {
        return accounts
    }, [accounts]
    )


    return (
        <Table
            captionTable="Accounts index"
            tableHeads={tableHeads}
            data={data}
        />
    )
}
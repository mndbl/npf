import localforage from "localforage";
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL, accounts_categories_URL, nf } from "../../../config/main.config";
import { SectionShowDetailsWrap } from "../../../components/wraps/SectionShowDetailsWrap";
import { useEffect, useState } from "react";

export async function loader({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login')
    const { accessToken } = userAuth.data
    const id = params.id
    const account = id ? await dataService.getDataId(`${accounts_URL}/show/${id}`, accessToken) : []
    const accountCategories = await dataService.getData(`${accounts_categories_URL}/index`, '', {}, accessToken)
    return { account, accountCategories }
}

export function Account() {
    const { account } = useLoaderData()
    const [totalBalance, setTotalBalance] = useState(0)
    let balance = 0
    useEffect(() => {
        setTotalBalance(balance)
    }, [balance])

    return (
        <SectionShowDetailsWrap
            description={'Account Name: '}
            label={`${account.name} (${nf.format(parseFloat(totalBalance))})`}
            textButton={'see details'}
        >
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">date</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">description</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Debits</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Credits</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Balance</th>
                    </tr>
                </thead>
                <tbody className="h-56 overflow-y-auto">
                    {
                        account.register_details.map((register, index) => {
                            const registerData = account.registers.find((reg) => reg.id === register.register_id)
                            return (
                                <tr key={`account-regiter-detail-${register.id}`} className="text-gray-700 dark:text-gray-100 hover:bg-gray-600">
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{registerData.date}</th>
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs p-4 text-left truncate-elipsis w-1/3">{registerData.description}</th>
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{register.amount_deb}</th>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{register.amount_cre}</td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {index === 0 ?

                                            nf.format(balance = parseFloat(account.init_deb_balance) - parseFloat(account.init_cre_balance) + parseFloat(register.amount_deb) - parseFloat(register.amount_cre))
                                            :
                                            nf.format(balance += register.amount_deb - register.amount_cre)}
                                    </td>
                                </tr>

                            )
                        })

                    }
                </tbody>
            </table>
        </SectionShowDetailsWrap>
    )
}
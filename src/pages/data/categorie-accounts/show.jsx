import localforage from "localforage"
import { redirect, useLoaderData, useNavigation } from "react-router-dom"
import { dataService } from "../../../services/data-services"
import { accounts_categories_URL } from "../../../config/main.config"
import { SectionShowDetailsWrap } from "../../../components/wraps/SectionShowDetailsWrap"
import { Loader } from "../../../components/loaders/loader"

export async function loader({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('/login')
    const id = params.id
    const categoryAccount = id ? await dataService.getDataId(`${accounts_categories_URL}/show/${id}`, accessToken) : {}
    return { categoryAccount }
}

export function CategoryAccount() {
    const navigation = useNavigation()
    const { categoryAccount } = useLoaderData()
    if (navigation.state === 'loading') return <Loader />

    return (
        <SectionShowDetailsWrap
            description={'Category Name: '}
            label={categoryAccount.name}
            textButton={'see accounts'}
        >
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Account</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Estimated Budget</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryAccount.accounts.map(account => {
                            return (
                                <tr className="text-gray-700 dark:text-gray-100">
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{account.name}</th>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{account.estimated_budget_amount}</td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        balance
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
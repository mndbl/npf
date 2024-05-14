import localforage from "localforage";
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL, nf, registers_URL } from "../../../config/main.config";
import { SectionShowDetailsWrap } from "../../../components/wraps/SectionShowDetailsWrap";

export async function loader({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login')
    const { accessToken } = userAuth.data
    const id = params.id
    const register = id ? await dataService.getDataId(`${registers_URL}/show/${id}`, accessToken) : {}
    const accounts = await dataService.getData(`${accounts_URL}/index`,'',{},accessToken)
    return { register, accounts, accessToken }
}

export function RegisterShow() {
    const { register } = useLoaderData()
    return (
        <SectionShowDetailsWrap
            description={`register date: ${register.date}`}
            label={`${register.description} - ${nf.format(register.amount)}`}
            textButton={'see details'}
        >
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">account</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">debit</th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">credit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        register.register_details.map(reg => {
                            return (
                                <tr key={`register-register-detail-${reg.id}`} className="text-gray-700 dark:text-gray-100 hover:bg-gray-600">
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{reg.accounts[0].name}</th>
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{reg.amount_deb}</th>
                                    <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{reg.amount_cre}</th>
                                    
                                </tr>

                            )
                        })

                    }
                </tbody>
            </table>
        </SectionShowDetailsWrap>
    )
}
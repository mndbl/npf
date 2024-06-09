import { useLoaderData } from "react-router-dom"
import { SubTable } from "../../../components/tables/SubTable"

const months = [
    {

    },
    {
        name: 'ene',
        dateFrom: '01/01/2024',
        dateTo: '01/31/2024'
    },
    {
        name: 'feb',
        dateFrom: '02/01/2024',
        dateTo: '02/29/2024'
    },
    {
        name: 'mar',
        dateFrom: '03/01/2024',
        dateTo: '03/31/2024'
    },
    {
        name: 'apr',
        dateFrom: '04/01/2024',
        dateTo: '04/30/2024'
    },
    {
        name: 'may',
        dateFrom: '05/01/2024',
        dateTo: '05/31/2024'
    },
    {
        name: 'jun',
        dateFrom: '06/01/2024',
        dateTo: '06/30/2024'
    },
    {
        name: 'jul',
        dateFrom: '07/01/2024',
        dateTo: '07/31/2024'
    },
    {
        name: 'aug',
        dateFrom: '08/01/2024',
        dateTo: '08/31/2024'
    },
    {
        name: 'sep',
        dateFrom: '09/01/2024',
        dateTo: '09/30/2024'
    },
    {
        name: 'oct',
        dateFrom: '10/01/2024',
        dateTo: '10/31/2024'
    },
    {
        name: 'nov',
        dateFrom: '11/01/2024',
        dateTo: '11/31/2024'
    },
    {
        name: 'dic',
        dateFrom: '12/01/2024',
        dateTo: '12/31/2024'
    },
]

export function ByPeriodsConsults(params) {
    const { accounts, categories, latestRegister } = useLoaderData()
    return (
        <div className="m-2 space-y-2">
            {
                categories.map((cat, index) => {

                    const relatedAccounts = cat.relatedAccounts
                    const balanceCategory = cat.balanceCategory
                    return (
                        <div key={`items-category-accounts-${cat.name}`}
                            className="group flex flex-col gap-2 rounded-lg bg-gray-600 px-5 py-1 text-white"
                            tabIndex={index + 1}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className="capitalize"> {`${cat.name} (${nf.format(balanceCategory.toFixed(2))})`} </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 overflow-y-auto items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                <SubTable data={relatedAccounts}  />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
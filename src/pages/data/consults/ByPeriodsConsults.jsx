import { useLoaderData, useNavigation } from "react-router-dom"
import { TableWrap } from "../../../components/wraps/TableWrap"
import { months, nf } from "../../../config/main.config"
import { useEffect, useState } from "react"
import { Loader } from "../../../components/loaders/loader"


const theadClass = "w-20 text-center px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"

export function ByPeriodsConsults(params) {
    const navigation = useNavigation()
    const { accounts } = useLoaderData()
    const accountsCategories = Object.keys(accounts)
    if (navigation.state === 'loading') return <Loader />
    return (
        <TableWrap>
            <table className="w-full text-xs">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
                        <th className={theadClass} scope="col"
                            id={`category-account`}>Category Account</th>
                        {
                            months.map(month => {
                                return (
                                    <th
                                        scope="col"
                                        id={`month-${month.name}`}
                                        key={'by-periods-theads' + month.name}
                                        className={theadClass}>
                                        {month.name}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {
                        accountsCategories.map(cat => {
                            return (
                                <MainTableRow key={`consults-by-periods-category-${cat}`} cat={cat} accounts={accounts} />
                            )
                        }
                        )

                    }
                </tbody>
            </table>
        </TableWrap>
    )
}



function MainTableRow({ cat, accounts }) {
    const [open, setOpen] = useState(false)
    const [openCat, setOpenCat] = useState(null)
    const handleOpenRowCategories = (cat) => {
        setOpenCat(cat)
    }

    useEffect(() => {
        openCat === cat ? setOpen(true) : setOpen(false)

    }, [openCat])

    return (
        <>
            <tr onClick={() => { handleOpenRowCategories(openCat === cat ? null : cat) }}
                className="cursor:pointer capitalize bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                id={`category-row-${cat}`}>
                <td className="pl-2" >{`${cat}`}</td>
                {
                    months.map(month => {
                        const amount = accounts[cat].balance_cat[month.name] ? accounts[cat].balance_cat[month.name] : 0
                        return (
                            <td className="text-right pr-2"
                                key={`category-row-${cat}
                                -${month.name}`}
                                headers={`category-row-${cat}`}
                            >
                                {nf.format(Math.abs(amount))}
                            </td>
                        )
                    }
                    )
                }
            </tr>
            {
                open && <DetailsTable accountsDetails={accounts[cat]} />
            }
        </>
    )
}

function DetailsTable({ accountsDetails, setBalanceCat }) {
    const accs = Object.keys(accountsDetails)
    return (
        <>
            {accs.map((acc, key) => {
                if (acc != 'balance_cat') return (
                    <SubTableRow
                        key={`sub-table-row-${accountsDetails[acc]}-${key}`}
                        accountsDetails={accountsDetails}
                        acc={acc}
                        setBalanceCat={setBalanceCat}
                    />
                )
            }
            )
            }
        </>

    )
}

function SubTableRow({ acc, accountsDetails }) {
    return (
        <tr className="capitalize  bg-gray-100 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
            key={`sub-table-row-details-${acc}`}>
            <td className="pl-1"
            headers={`category-row-${accountsDetails[acc]}-${acc}`}>{acc}</td>
            {
                months.map(month => {
                    let amount = accountsDetails[acc][month.name] ? accountsDetails[acc][month.name].balance : 0
                    if (amount < 0) amount = Math.abs(amount)
                    return (
                        <td className="text-right pr-2"
                            key={`amount-monthly-${accountsDetails[acc][month.name]}-${month.name}`}
                            headers={`category-row-${accountsDetails[acc]}-${acc}`}
                        >{nf.format(amount)}</td>

                    )
                }
                )
            }
        </tr>
    )
}
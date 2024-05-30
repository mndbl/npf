import { useMemo, useState } from "react";
import { AddButton } from "../buttons/AddButton.jsx";
import { TableWrap } from "../wraps/TableWrap";
import { Pagination } from "./Pagination.jsx"
import { TRow } from "./TRow.jsx";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { SearchBar } from "../inputs/SearchBar.jsx";



export function Table({ captionTable = 'Table', tableHeads = [], data = [] }) {
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('')  // column name to sort
    const [isAscending, setIsAscending] = useState(true)

    const handleSortBy = (accessor) => {
        if (sortBy === accessor) {
            return setSortBy(prevValue => prevValue === accessor ? '' : accessor)
        }
        return setSortBy(accessor)
    }
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        if (sortBy != '') {
            if (isAscending === true) {
                return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
                    .slice(firstPageIndex, lastPageIndex)
            } else {
                return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
                    .slice(firstPageIndex, lastPageIndex)
            }
        }
        return data.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, sortBy, isAscending, pageSize, data])

    return (
        <TableWrap>
            <table className="w-full">
                <caption
                    className="text-lg px-4 py-3 text-center font-bold tracking-wide text-gray-500 dark:text-gray-100 uppercase border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <SearchBar />
                    {captionTable}
                    <div className="float-right">
                        <AddButton />
                    </div>
                </caption>
                <thead className="">
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
                        {tableHeads.map((hd) =>
                            <th className="px-4 py-3" key={`th-table-${hd.header}`}>
                                {
                                    hd.header === 'id' ? hd.header :
                                        <button onClick={() => handleSortBy(hd.accessor)}
                                            className="uppercase"
                                        >{hd.header}</button>
                                }
                                {
                                    sortBy && sortBy === hd.accessor ?
                                        <button onClick={() => setIsAscending(!isAscending)}>
                                            {
                                                isAscending ?
                                                    <ArrowDownIcon className="h-4 w-4 pt-2" aria-hidden="true" />
                                                    :
                                                    <ArrowUpIcon className="h-4 w-4 pt-2" aria-hidden="true" />
                                            }
                                        </button>
                                        :
                                        ''
                                }
                            </th>)}
                        <th className="px-4 py-3" colSpan={3}>options</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {
                        currentTableData.map(
                            (tRow) => <TRow tRow={tRow} tableHeads={tableHeads} key={`tr-table-${tRow.id}`} />
                        )
                    }

                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
                setPageSize={setPageSize}
            />
        </TableWrap>
    )
}

/* <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Hans Burger</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$855.85</td>
                        <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                        </td>
                        <td className="px-4 py-3 text-sm">15-01-2021</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Jolina Angelie</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$369.75</td>
                        <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                        </td>
                        <td className="px-4 py-3 text-sm">23-03-2021</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy" />
                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Dave Li</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$775.45</td>
                        <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"> Expired </span>
                        </td>
                        <td className="px-4 py-3 text-sm">09-02-2021</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Rulia Joberts</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$1276.75</td>
                        <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                        </td>
                        <td className="px-4 py-3 text-sm">17-04-2021</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Hitney Wouston</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Singer</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">$863.45</td>
                        <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
                        </td>
                        <td className="px-4 py-3 text-sm">11-01-2021</td>
                    </tr> */
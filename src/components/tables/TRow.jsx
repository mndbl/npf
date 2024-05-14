import { RowOptions } from "./RowOptions"

export const TRow = ({ tRow, tableHeads }) => {
    const dataCells = <tr className="capitalize bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">

        {
            tableHeads.map(( hd, index) => {
                return (<td key={`${index}-${hd.accessor}-${tRow.id}`} className="px-2 text-sm">{tRow[hd.accessor]}</td>)
            })
        }
        <RowOptions id={tRow.id} />
    </tr>
    return (
        dataCells
    )
}
/* <td className="px-4 py-3">
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
<td className="px-4 py-3 text-sm">15-01-2021</td> */
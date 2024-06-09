import { nf } from "../../config/main.config";



export function SubTable({ data, subTableHeads }) {
    return (
        <table className=" mt-auto items-center bg-transparent border-collapse">
            <thead>
                <tr>
                    {
                        subTableHeads.map(head => {
                            if (head.type === 'number') {
                                return (
                                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{head.name}</th>
                                )
                            }
                            return (
                                <th className="w-1/6 px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{head.name}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dat) => {
                        if (dat.balance > 0.001 || dat.balance < -0.001) {
                            return (
                                <tr key={`account-${dat.name}-data-by-categorie`}>
                                    <td className="capitalize border-t-0 align-middle border-l-0 border-r-0 text-xs py-1 text-left">{dat.name}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(dat.init_deb_balance)}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(dat.init_cre_balance)}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(dat.debits.toFixed(2))}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(dat.credits.toFixed(2))}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format((dat.balance).toFixed(2))}</td>
                                </tr>
                            )
                        }
                        return null
                    })

                }
            </tbody>
        </table>
    )
}
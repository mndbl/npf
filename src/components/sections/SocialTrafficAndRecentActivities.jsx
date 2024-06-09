import { nf } from "../../config/main.config";
import { Link } from "react-router-dom";

export function SocialAndRecent({ categories, latestRegister }) {
    return (
        <section id='social-traffic-recent-activities' className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

            {/* <!-- relations for account categories --> */}
            <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Accounts Categories</h3>
                        </div>
                        {/* <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                            <button className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                        </div> */}
                    </div>
                    <div className="block w-full max-h-60 overflow-x-auto">
                        {/* <!-- component --> */}
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
                                                <SubTable relatedAccounts={relatedAccounts} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- relations for account categories --> */}

            {/* <!-- Recent Activities --> */}
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Recent Activities</h3>
                        </div>
                        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                            <Link to={'/admin/registers'} className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                See all
                            </Link>
                        </div>
                    </div>
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Date</th>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Description</th>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                latestRegister.map(reg => {
                                    return (
                                        <tr key={`recent-register-${reg.id}`}
                                            className="text-gray-700 dark:text-gray-100">
                                            <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{reg.date}</th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">{reg.description}</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {nf.format(parseFloat(reg.amount).toFixed(2))}
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!-- ./Recent Activities --> */}
        </section>
    )
}

const SubTable = ({ relatedAccounts }) => {
    return (
        <table className=" mt-auto items-center bg-transparent border-collapse">
            <thead>
                <tr>
                    <th className="w-1/6 px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Account</th>
                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">InitDebBal</th>
                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">InitCreBal</th>
                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Debits</th>
                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Credits</th>
                    <th className="px-1 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Balance</th>

                </tr>
            </thead>
            <tbody>
                {
                    relatedAccounts.map((account) => {
                        if (account.balance > 0.001 || account.balance < -0.001) {
                            return (
                                <tr key={`account-${account.name}-data-by-categorie`}>
                                    <td className="capitalize border-t-0 align-middle border-l-0 border-r-0 text-xs py-1 text-left">{account.name}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(account.init_deb_balance)}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(account.init_cre_balance)}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(account.debits.toFixed(2))}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format(account.credits.toFixed(2))}</td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-1 text-right">{nf.format((account.balance).toFixed(2))}</td>
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
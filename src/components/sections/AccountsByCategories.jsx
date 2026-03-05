import { nf } from "../../config/main.config"
import { SubTable } from "./SocialTrafficAndRecentActivities"

export function AccountsByCategories({ categories, setShowAccountDetails}) {
    return (
        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50 pl-4">Accounts Categories</h3>
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
                                const balanceCategory = cat.balanceCategory ?? 0
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
                                            <SubTable relatedAccounts={relatedAccounts} setShowAccountDetails={setShowAccountDetails} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react"
import { BackButton } from "../buttons/BackButton"

export function SectionShowDetailsWrap({ children, description, label, textButton }) {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <section className="w-3/5 m-auto pt-8 capitalize">
            <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">{description} <span className="uppercase font-bold">{label}</span></h3>
                        </div>
                        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                {textButton}
                            </button>
                            <BackButton />
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">

                        {showDetails && children}
                    </div>
                </div>
            </div>
        </section>
    )
}
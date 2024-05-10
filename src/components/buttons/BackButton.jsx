import { BackspaceIcon, BackwardIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)}
            type="button"
            className="bg-blue-500 dark:bg-gray-100 text-red-500 active:bg-blue-600 dark:text-red-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Back
        </button>
    )
}
import { useNavigate } from "react-router-dom"

export function Button({ text }) {
    return (
        <button type="submit"
            className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-500">
            {text}
        </button>
    )
}
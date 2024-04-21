import { useNavigate } from "react-router-dom"

export function GroupButton(params) {
    const navigate = useNavigate()
    return (
        <div className="float-right">
            <button type="submit"
                className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-l-md hover:shadow-lg hover:bg-green-500">
                Send
            </button>
            <button type="reset" onClick={() => navigate(-1)}
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-red-600 rounded-r-md hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
        </div>
    )
}
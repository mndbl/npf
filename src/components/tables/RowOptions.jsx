import { MagnifyingGlassCircleIcon, DocumentIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Form, Link } from "react-router-dom"
export function RowOptions({ id }) {
    const iconClass = "h-5 w-5 py-3 text-sm"
    return (
        <>
            <td className={`${iconClass} text-green-700`}>
                <Link to={`${id}`}>
                    <MagnifyingGlassCircleIcon />
                </Link>
            </td>
            <td className={`${iconClass} text-blue-700`}>
                <Link to={`${id}/edit`}>
                    <DocumentIcon />
                </Link>
            </td>
            <td className={`${iconClass} text-red-700`}>
                <Form
                    method="post" action={`${id}/destroy`}
                    onSubmit={(event) => {
                        if (
                            !window.confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit" to={`${id}/destroy`}
                        className={`h-6 w-6  text-sm text-red-700`}
                    >
                        <TrashIcon />
                    </button>
                </Form>
            </td>
        </>
    )
}
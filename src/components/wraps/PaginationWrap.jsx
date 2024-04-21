export function PaginationWrap({ children }) {
    return (
        <div className="grid w-full px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            {children}
        </div>
    )
}
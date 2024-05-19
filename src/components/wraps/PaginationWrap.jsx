export function PaginationWrap({ children }) {
    return (
        <div className="flex flex-wrap w-full px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            {children}
        </div>
    )
}
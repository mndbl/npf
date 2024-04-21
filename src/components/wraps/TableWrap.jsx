export function TableWrap({children}) {
    return (
        <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
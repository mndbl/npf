export function TableWrap({children}) {
    return (
        <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden shadow-xs">
                <div className="w-5/6 mx-auto overflow-x-auto rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}
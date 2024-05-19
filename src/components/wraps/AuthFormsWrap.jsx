export function AuthFormsWrap({ children, captionForm = 'Shop Info' }) {
    return (
        <div className="relative flex w-full items-center z-0 justify-center bg-center  py-4 px-4 sm:px-6 lg:px-8"
        >
            <div className=""></div>
            <div className="max-w-lg w-full space-y-4 px-10 py-4 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto text-gray-100 dark:text-gray-900">{captionForm}</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div className="mt-5 capitalize">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
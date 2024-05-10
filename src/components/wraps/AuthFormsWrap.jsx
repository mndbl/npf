export function AuthFormsWrap({ children, captionForm = 'Shop Info' }) {
    return (
        <div className="relative flex w-full items-center z-0 justify-center bg-center dark:bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
        >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="max-w-md w-full space-y-4 px-10 py-4 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto text-gray-100 dark:text-gray-900">{captionForm}</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div className="mt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
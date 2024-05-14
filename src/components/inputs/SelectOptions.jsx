export function SelectOptions({ options }) {
    return (
        <>
            {
                options.map((opt) => <option key={`select-option-${opt.name}`}
                className='text-gray-100 dark:text-gray-800' value={opt.id}>
                    {opt.name}
                </option>)
            }
        </>
    )
}
export function SelectOptions({ options }) {
    return (
        <>
            {
                options.map((opt, index) => <option className='text-gray-100 dark:text-gray-800' value={index}>{opt}</option>)
            }
        </>
    )
}
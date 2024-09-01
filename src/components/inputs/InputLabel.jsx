export function InputLabel({ labelName, requiredInput = true }) {
    return (
        <label className="font-semibold text-gray-600 dark:text-gray-100 py-2">
            {labelName}
            {
                requiredInput === true && <abbr title="required">*</abbr>
            }
        </label>
    )
}
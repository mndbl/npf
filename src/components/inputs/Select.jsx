import { InputLabel } from "./InputLabel"
import { SelectOptions } from "./SelectOptions"


export function Select({ inputClass = 'mb-3 space-y-2 w-full text-xs', name, labelName, options, defaultVal }) {
    return (
        <div className={inputClass}>
            <InputLabel labelName={labelName} />
            <select
                className="text-gray-100 dark:text-gray-800 capitalize block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                required="required"
                name={`select-${name}`}
                id={`select-${name}`}
                defaultValue={defaultVal}
            >
                <option value="">Select an option</option>
                <SelectOptions options={options} />
            </select>
        </div>
    )
}